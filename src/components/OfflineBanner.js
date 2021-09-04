import { IoCloudOfflineOutline } from 'react-icons/io5'

export default function OfflineBanner() {
  return (
    <div class='banner'>
      <div>
        <IoCloudOfflineOutline />
        <p>You are currently offline. Changes will be synced when you re-connect</p>
      </div>
    </div>
  )
}
