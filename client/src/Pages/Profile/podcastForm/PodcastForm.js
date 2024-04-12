import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { savePodcastId } from "../../../features/podcastId";

function PodcastForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const podcastId = useSelector((state) => state.podcastId.id);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      let image = data.image[0];
      const {
        podcasterName,
        podcastTitle,
        podcastDescription,
        podcastCategory,
      } = data;

      const formData = new FormData();
      formData.append("podcasterName", podcasterName);
      formData.append("podcastTitle", podcastTitle);
      formData.append("podcastDescription", podcastDescription);
      formData.append("podcastCategory", podcastCategory);
      formData.append("image", image);

      const token = localStorage.getItem("token");
      console.log("token", token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(
        "http://localhost:8000/podcast/upload",
        formData
      );

      if (response.status === 200) {
        dispatch(savePodcastId(response.data.newPost._id));
        // Redirect to the next step (Podcast Audio form)
        navigate("/profile/uploadpodcast/audio");
      } else {
        console.error(
          "Server responded with a non-OK status code:",
          response.status
        );
      }
    } catch (error) {
      console.error(
        "An error occurred while submitting the podcast data:",
        error
      );
      // Handle the error gracefully, show a message to the user, etc.
    }
  };
  return (
    <div className="flex flex-col">
      <h1>Podcast Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          className="bg-gray-900 outline-none  text-gray-300 rounded-lg p-2"
          type="text"
          placeholder="Podcaster Name"
          {...register("podcasterName")}
          required
        />

        <input
          className="bg-gray-900 outline-none  text-gray-300 rounded-lg p-2"
          type="text"
          placeholder="Podcast Title"
          {...register("podcastTitle")}
          required
        />
        <input
          className="bg-gray-900 outline-none  text-gray-300 rounded-lg p-2"
          type="text"
          placeholder="Podcast Description"
          {...register("podcastDescription")}
          required
        />
        <input
          className="bg-gray-900 outline-none  text-gray-300 rounded-lg p-2"
          type="text"
          placeholder="Podcast Category"
          {...register("podcastCategory")}
          required
        />
        <input
          type="file"
          placeholder="Podcast Image"
          {...register("image")}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 px-3 w-full py-2 rounded-md text-white">
          Next
        </button>
      </form>
    </div>
  );
}

export default PodcastForm;
