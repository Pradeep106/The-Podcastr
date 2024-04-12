import React from "react";
import BlogNav from "./components/BlogNav";
import AuthorProfile from "./components/AuthorProfile";
import ImageComp from "./components/ImageComp";
import { blogData } from "./BlogData";
import Footer from "../home/Footer/Footer";

const PostPage = () => {
  return (
    <div className="bg-black w-[100vw] h-[100vh] overflow-x-hidden">
      <div className="flex justify-center py-10">
        <BlogNav />
      </div>
      <div className="w-[70%] mx-auto mt-10">
        <div className="text-white">
          <p className="text-lg">December 5, 2022</p>
          <h1 className="text-5xl font-semibold">
            Blog Explained in Instagram Photos
          </h1>
          <p className="mt-5">By Pradeep</p>

          <img
            src="https://assets.website-files.com/638994e3ac476c94ba486f9c/638998000e53efbaefe87dd2_blog-01.jpg"
            alt=""
            className="w-[100%] h-[90%] rounded-lg mt-10"
          />
          <p className="text-md mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            delectus culpa nemo, tempora dolorem ducimus ut, cumque esse ab
            cupiditate sint libero labore quo ipsum accusantium rerum aperiam
            aspernatur voluptatem! Placeat quaerat dolor ratione, sit harum id
            animi aliquam assumenda numquam eum nobis dolores similique unde
            ipsum modi laborum amet nam. Perspiciatis quas illo natus? Accusamus
            quisquam asperiores, soluta beatae adipisci excepturi ratione error.
            Fuga minus vitae sint fugit est! Magni voluptates neque placeat
            magnam repellendus, dolore voluptate, minus ex rem temporibus, saepe
            delectus quasi quis iste sequi eveniet blanditiis velit! Eos
            veritatis dolorem velit similique expedita molestias dolor aperiam
            odit. Assumenda ut nesciunt rerum at doloribus ad necessitatibus ab
            atque iste sapiente omnis hic voluptate voluptatem pariatur cum,
            esse perferendis voluptatibus nisi repudiandae soluta vero totam?
            Nostrum reiciendis dolor numquam, possimus ex, esse officiis quaerat
            dolorem veritatis est quas optio sapiente eveniet id deserunt rem
            distinctio voluptatum molestiae laborum labore omnis, dolore illo?
            A, vitae praesentium ullam quod omnis ad repellat dolore hic alias
            id eos quia vel excepturi dolor, distinctio nulla temporibus!
            Perferendis tempore odit minus modi aliquid veniam nisi dicta
            similique! Accusantium quos tempore quisquam nostrum ab voluptatum
            qui officia corporis cumque. Earum asperiores dolorem sapiente eos
            quod quidem accusantium facilis vero cumque obcaecati, esse
            dignissimos illo modi laborum fugit repudiandae aperiam blanditiis
            nesciunt. Labore corporis veritatis similique architecto
            consequuntur placeat saepe exercitationem, aperiam dolorem impedit
            cum qui doloribus, nobis at dolores in quo minima enim repudiandae
            magnam culpa quis sunt. Molestiae voluptatem est, enim laborum dicta
            iste? Dignissimos aliquam rem voluptatum molestiae accusamus autem
            totam vero earum? Iste voluptatem, omnis quisquam dolor minus ipsa
            nobis esse dolorum facilis voluptas odit deserunt. Molestias itaque
            exercitationem vel, minus mollitia iure alias recusandae, modi dolor
            quidem commodi voluptates, officiis delectus a cupiditate accusamus
            quisquam veritatis. Perspiciatis possimus quae et obcaecati nihil
            odio id iure earum ipsum corrupti. Aliquam, dolore! Nostrum
            dignissimos quos quibusdam, iure assumenda quam impedit minima
            accusamus eligendi, reprehenderit quod alias voluptas libero sed
            placeat reiciendis nulla. Ad cupiditate non quae voluptatibus fuga
            debitis perferendis ipsam doloremque nostrum officia reprehenderit
            asperiores aperiam quaerat quasi, eligendi, repellat quibusdam totam
            magnam ut a nulla? Placeat quis, asperiores temporibus inventore
            laborum sed optio fuga quibusdam ipsa porro maxime voluptate, iusto
            cupiditate, laboriosam iure. Accusamus voluptate non quaerat
            veritatis consequuntur fugit quod, eligendi id ratione molestiae cum
            mollitia explicabo sunt hic. Dolor amet ad explicabo quas. Eum
            nostrum dolores voluptates vero esse fugit consectetur quidem vitae
            repellendus quae porro voluptas, perferendis ab, distinctio repellat
            dolore quisquam quo aut. Dolorum architecto corrupti harum, at rerum
            iste reiciendis, nobis consectetur atque explicabo vitae nostrum,
            neque quaerat! Aliquid, numquam eum quas officia velit dignissimos
            error. Hic mollitia, odio quisquam non atque, error ut iusto autem
            eos, ab velit sunt natus eaque quibusdam facere similique dolorem
            eligendi id aliquam quos? Fugit nemo alias ut nesciunt nobis
            voluptatibus aliquid minima? Quae eligendi deserunt nesciunt magni
            expedita aliquam fuga repellat eos, corporis odio earum tempora
            dicta, atque eius perferendis voluptas beatae culpa iure placeat
            quidem vero autem.
          </p>
          <div className="mt-20">
            <AuthorProfile />
          </div>
        </div>
      </div>
      <section className="w-[90%] mx-auto mt-20">
        <p className="text-white text-lg font-semibold">Recent Post</p>
        <div className="flex justify-center flex-wrap mt-10 ">
          {blogData.map((post) => {
            return (
              <div className="image-comp2 w-[25%]">
                <ImageComp
                  key={post.id}
                  src={post.src}
                  title={post.title}
                  author={post.author}
                />
              </div>
            );
          })}
        </div>
        <Footer/>
      </section>
    </div>
  );
};

export default PostPage;
