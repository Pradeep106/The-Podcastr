import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import {Formik,Form,Field} from "formik";
import *as Yup from 'yup';

function PodcastAudioForm() {

  const navigate = useNavigate();

  const podcastId = useSelector((state) => state.podcastId.id);

  useEffect(() => {
    console.log("podcastId.", podcastId);
  }, []);

  const onSubmit = async (data) => {
  
     
  };
  return (
    <div className="flex flex-col">
      <h1>Podcast Details</h1>
      <Form>
        <Field name
      </Form>
      
    </div>
  );
}

export default PodcastAudioForm;
