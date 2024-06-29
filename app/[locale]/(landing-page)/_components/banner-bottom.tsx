import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerBottom = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-16 bg-green-100', theme === 'dark' && 'bg-slate-500')}>
      <div className='px-32 flex justify-center py-16'>
        <div>
          <Image height={350} width={450} alt='banner' src='/cook.png' />
        </div>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h1 className='font-bold text-4xl' style={{ color: 'black' }}>Nhấn nút đăng ký tham gia ngay các khóa học nấu ăn bổ ích</h1>

          <p style={{ color: 'black' }}>Xã hội phát triển theo chiều hướng công nghệ hóa, việc biết nấu ăn bị xem nhẹ, nhưng sẽ thật tuyệt nếu biết kĩ năng nấu ăn ngon chuẩn đầu bếp chuyên nghiệp phải không nào, còn chần chờ gì mà không tham gia ngay các khóa học nấu ăn của chúng tôi</p>
          <div className='flex items-center gap-2'>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Bắt đầu học ngay</Button>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Đăng nhập</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BannerBottom
