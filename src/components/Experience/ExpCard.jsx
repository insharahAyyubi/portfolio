const ExpCard = ({ data }) => {
    return (
      <div className="card md:card-side border items-center shadow-slate-400 shadow-md bg-pink-50 dark:bg-transparent mt-8 border-pink-200 w-full sm:min-w-[500px] md:min-w-[700px] lg:min-w-[800px]">
        <figure className="w-full pb-2 md:pb-0 md:max-w-40 pt-3 md:pt-0 dark:bg-slate-300">
          <img
            className="max-h-24 sm:px-4 object-contain"
            src={data.img}
            alt="Album"
          />
        </figure>
        <div className="card-body flex items-center md:items-start p-4">
          <div className="flex flex-col md:flex-row items-start w-full justify-between">
            <div className="title text-start">
              <h1 className="card-title dark:text-pink-300 text-2xl font-medium">
                {data.company}
              </h1>
              <h3 className="card-subtitle font-light text-lg">{data.position}</h3>
            </div>
            <div>
              <div className="duration font-semibold">{data.duration}</div>
              <div className="grade mt-4 sm:mt-0">{data.location}</div>
            </div>
          </div>
          <div className="border-t-2 border-slate-200 w-full my-2"></div>
  
          <div className="flex flex-col items-start">
            {data.points.map((point, index) => (
              <div key={index} className="point">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ExpCard;
  