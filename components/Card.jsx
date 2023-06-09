const Card = ({data}) => {
  return (
    <div className="w-36 px-3 py-5 hover:scale-y-95 origin-top transition-all duration-300 flex flex-col justify-around text-center h-[13vh] text-white rounded-md cursor-pointer relative" style={{backgroundColor: data.color}}>
      <div className="absolute z-10 flex w-full justify-between -mx-3 px-5 -translate-y-14">
        <div className="pill"/>
        <div className="pill"/>
        <div className="pill"/>
        <div className="pill"/>
        <div className="pill"/>
      </div>
      <h2 className="text-[0.85rem] overflow-hidden whitespace-nowrap font-bold font-workSans">{data.time}</h2>
      {data.note && <p className={`text-[0.7rem] text-left font-hindRegular leading-3 text-white/80 ${data.location ? 'line-clamp-1' : 'line-clamp-2'} -mt-3`}>{data.note}</p>}
    </div>
  )
}

export default Card;
