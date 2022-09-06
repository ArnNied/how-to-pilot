import Coin from "../common/Coin"

const Banner = () => {
  return (
    <div className="flex justify-center px-32 py-12">
      <div
        style={{
          backgroundImage: "url('/assets/images/store/store-banner.svg')",
        }}
        className="w-10/12 h-[450px] flex items-end bg-secondary-base/50 bg-cover bg-center bg-blend-overlay rounded-lg"
      >
        <div className="flex flex-col justify-end px-16 py-10 space-y-4">
          <h3 className="h-fit font-bold text-3xl text-white brightness-100">
            Coaching Ticket
          </h3>
          <Coin amount={100} />
        </div>
      </div>
    </div>
  )
}

export default Banner
