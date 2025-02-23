import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  // Sort posts by date in descending order (newest first)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Blogs"
            title="Our Recent News"
            paragraph="At GenGraphic, we are passionate about sharing knowledge and insights that matter to our community. Our blog covers the latest trends, tips, and updates in the world of digital solutions and design. Whether you're a professional or just curious, our articles are designed to provide valuable information that can help you stay ahead in an ever-evolving digital landscape. Dive in and explore our recent posts!"
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {sortedPosts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} isFirst={i === 0}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
