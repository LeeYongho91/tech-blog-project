import Slide from '@/components/main/slide'
import TagList from '@/components/main/tag-list'
import BlogList from '@/components/main/blog-list'
import TopTagList from '@/components/main/top-tag-list'

export default function Home() {
  return (
    <div>
      <section>
        <Slide />
      </section>
      <section className="">
        <TagList />
      </section>
      <section className="flex justify-center">
        <div className="md:w-[600px] flex w-[500px]">
          <div className="md:w-[600px] w-full">
            <BlogList />
          </div>
          <div className="md:block hidden">
            <TopTagList />
          </div>
        </div>
      </section>
    </div>
  )
}
