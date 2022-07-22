import { shortenAddress } from '../helpers'
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
export const UserItem = ({ wallet, tokenAmount }) => {

  return (
    <div className='flex flex-row w-full overflow-hidden lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3 '>
      <div className="bg-neutral-600 rounded-lg flex justify-between">
        <div className='flex flex-col justify-center items-center py-4 pl-4'>
          <Jazzicon diameter={50} seed={jsNumberForAddress(wallet)} />
        </div>
        <div className='flex flex-col justify-center p-3'>
          <p className='text-base font-semibold text-neutral-200'>User address</p>
          <p className='text-sm text-neutral-400'>{shortenAddress(wallet)}</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-neutral-700 p-4'>
          <p className='text-base font-semibold text-neutral-200'>Amount</p>
          <p className='text-sm text-neutral-400 text-center'>{tokenAmount}</p>
          </div>
      </div>
      <div className="flex bg-orange-600 rounded-r-lg items-center justify-center py-1 px-4">
          <p className='w-10 text-orange-900 hover:text-orange-700'>View</p>
      </div>
    </div>
  )
}