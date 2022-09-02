import Image from "next/image"

type TCoinProp = {
  amount: number
}

const Coin = ({ amount }: TCoinProp) => {
  return (
    <div className="w-fit flex flex-row items-center px-4 py-2 bg-white rounded shadow-lg space-x-2">
      <div className="relative w-6 h-6">
        <Image src="/assets/images/common/coin.svg" layout="fill" />
      </div>
      <p className="font-semibold text-xs">{amount} Coins</p>
    </div>
  )
}

export default Coin
