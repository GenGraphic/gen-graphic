import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog, isFirst }: { blog: Blog, isFirst: boolean }) => {
  const { title, coverImage, excerpt, date, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">
        <Link href={`/blogs/${slug}`} aria-label="blog cover" className="block">
          <Image
            src={coverImage!}
            alt={title as string}
            className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            width={408}
            height={272}
            style={{ height: 272, objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
            {format(new Date(date), "dd MMM yyyy")}
          </span>
          {isFirst &&
            <span className="mb-5 inline-block rounded bg-rose-600 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">NEW</span>
          }
        </div>
        
        <h3>
          <Link
            href={`/blogs/${slug}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{excerpt}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
