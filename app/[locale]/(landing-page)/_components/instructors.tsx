"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstructorItem from "./instructor-item";

const instructors = [
  {
    imageSrc: '/i-1.jpg',
    title: 'Người đầu bếp chuyên nghiệp cần được đào tạo bài bản',
    name: 'Để trở thành một đầu bếp chuyên nghiệp, bạn cần phải được đào tạo những kiến thức về ẩm thực, thành thạo các kỹ năng cũng như phương pháp chế biến món ăn',

  },
  {
    imageSrc: '/i-2.jpg',
    title: 'Mô tả chi tiết công việc của người đầu bếp',
    name: 'Có thể học tại nhà để trao đổi trực tiếp và giải đáp thắc mắc với giáo viên',

  },
  {
    imageSrc: '/i-3.jpg',
    title: 'Làm nghề đầu bếp cần trang bị những kỹ năng gì?',
    name: 'Quá trình phát triển sự nghiệp về lâu dài đòi hỏi bạn phải là người có kỹ năng tổ chức và quản lý các nghiệp vụ liên quan đến nghề bếp.',

  },
  {
    imageSrc: '/i-4.jpg',
    title: 'Dạy nấu ăn chuyên nghiệp',
    name: 'Xu hướng nền kinh tế đang ngày càng phát triển mạnh mẽ, trong đó ngành du lịch dịch vụ đang có những ảnh hưởng đáng kể.',

  },
  {
    imageSrc: '/i-5.jpg',
    title: 'Học nấu ăn chuyên nghiệp ở đâu tốt nhất?',
    name: 'Học nấu ăn chuyên nghiệp ở Ngọc Huy Chef là lựa chọn tốt nhất cho những người mới bắt đầu',

  },
  {
    imageSrc: '/i-6.jpg',
    title: 'Đội ngũ hỗ trợ',
    name: 'Đội ngũ hỗ trợ của chúng tôi luôn túc trực từ 6-18h từ thứ 2 đến thứ 7',

  }
];

const Instructors = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='px-32 pt-8 mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>Những hình ảnh thực tế</h1>
      </div>
      <div className="pt-4 mt-2">
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <InstructorItem
              key={index}
              imageSrc={instructor.imageSrc}
              title={instructor.title}
              name={instructor.name}

            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Instructors
