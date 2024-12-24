import Image from 'next/image';

const BlogDetail = () => {
  return (
    <div className="py-10">
      {/* Blog Header Section */}
      <header className="bg-gradient-to-t from-[#0a0747] to-[#a3155d] text-white py-20 px-5">
        <div className="max-w-5xl mx-auto h-[350px] flex flex-col items-center justify-center text-center">
          <p className="text-sm mb-2">June 25, 2023</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.
          </h1>
          <p className="text-lg mt-4">
            Sodales venenatis bibendum nam vitae nullam nec? Sagittis fusce etiam dictumst augue urna est dictum. Luctus a leo tincidunt quis lectus, nisi porta sollicitudin senectus, ut nibh interdum eget neque. Pulvinar enim placerat ornare, ultrices mauris! Suscipit mattis fringilla!
          </p>
        </div>
      </header>

      {/* Blog Content Section */}
      <main className="max-w-5xl mx-auto px-5 md:px-0 py-10">
        {/* Main Image */}
        <div className="relative w-full h-80 mb-8 mt-[-150px]">
          <Image
            src="/blogs/Blog1.webp"
            alt="Blog Post Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Blog Body */}
        <div className="prose prose-lg prose-headings:text-[#0a0b36] prose-p:text-gray-600">
          <p>
            Est eleifend! Luctus pharetra vehicula fringilla iaculis conubia. Vehicula pellentesque mattis integer egestas himenaeos. Laoreet sed aenean hendrerit ad! Phasellus elementum purus ut dictumst diam sapien.
          </p>

          <p>
            Curabitur blandit tempus porttitor. This is a static example of a blog post where you can write as much content as needed to match the design you've shared. The content will fill out the structure, keeping everything aligned with your blog's theme.
          </p>

          <h2>This is a h2 headline</h2>

          <p>
            Ornare vivamus in nullam libero etiam purus. Magna torquent himenaeos libero. Aenean eget.
          </p>

          <p>
            Nisi porttitor facilisis mauris ipsum porta himenaeos integer nullam, adipiscing gravida. Tortor bibendum integer hac placera himenaeos dictum. Lorem imperdiet convallis donec sapien semper.
          </p>

          <p>
            Sociosqu commodo elit aliquam etiam! Vitae lacus quam tincidunt! Cursus nunc nullam molestie turpis. Neque viverra morbi.
          </p>

          {/* Additional Image */}
          <div className="relative w-full h-80 mt-8">
            <Image
              src="/blogs/Blog2.webp"
              alt="Secondary Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className='my-10'>
          <p>
            Est eleifend! Luctus pharetra vehicula fringilla iaculis conubia. Vehicula pellentesque mattis integer egestas himenaeos. Laoreet sed aenean hendrerit ad! Phasellus elementum purus ut dictumst diam sapien.
          </p>

          <p>
            Curabitur blandit tempus porttitor. This is a static example of a blog post where you can write as much content as needed to match the design you've shared. The content will fill out the structure, keeping everything aligned with your blog's theme.
          </p>

          <h2>This is a h2 headline</h2>

          <p>
            Ornare vivamus in nullam libero etiam purus. Magna torquent himenaeos libero. Aenean eget.
          </p>

          <p>
            Nisi porttitor facilisis mauris ipsum porta himenaeos integer nullam, adipiscing gravida. Tortor bibendum integer hac placera himenaeos dictum. Lorem imperdiet convallis donec sapien semper.
          </p>

          <p>
            Sociosqu commodo elit aliquam etiam! Vitae lacus quam tincidunt! Cursus nunc nullam molestie turpis. Neque viverra morbi.
          </p>

          </div>
      
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
