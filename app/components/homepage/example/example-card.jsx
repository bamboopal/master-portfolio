// @flow strict
import Image from 'next/image';
import Link from 'next/link';
// import { timeConverter } from '@/utils/time-converter';
// import { BsHeartFill } from 'react-icons/bs';
// import { FaCommentAlt } from 'react-icons/fa';

function ExampleCard({ example }) {

  return (
    <Link target='_blank' href={example.url}>
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group cursor-pointer">
        <div className="h-44 lg:h-52 w-auto overflow-hidden rounded-t-lg">
          <Image
            src={example?.cover_image}
            height={1080}
            width={1920}
            alt=""
            className='h-full w-full group-hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className="p-2 sm:p-3 flex flex-col">
          {/* <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p>{timeConverter(example.published_at)}</p>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <BsHeartFill />
                <span>{example.public_reactions_count}</span>
              </p>
              {example.comments_count > 0 &&
                <p className="flex items-center gap-1">
                  <FaCommentAlt />
                  <span>{example.comments_count}</span>
                </p>
              }
            </div>
          </div> */}
          <Link target='_blank' href={example.url}>
            <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium group-hover:text-[#16f2b3]'>
              {example.title}
            </p>
          </Link>
          {/* <p className='mb-2 text-sm text-[#16f2b3]'>
            {`${example.reading_time_minutes} Min Read`}
          </p> */}
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
            {example.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExampleCard;
