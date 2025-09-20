function CounterTiming({ dateTime }) {
  const { number, time } = dateTime;
  return (
    <button className="bg-txtPrimary px-[10px] md:px-[15px] py-[5px]  rounded-[4px] font-bold flex gap-[2px]">
      <span>{number}</span>
      <span>{time}</span>
    </button>
  );
}

export default CounterTiming;
