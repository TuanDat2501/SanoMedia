'use client'
import React from 'react';
import Image from "next/image";
import {useMediaQuery} from "usehooks-ts";

const GalaDinner = () => {
    const isMobile = useMediaQuery('(max-width: 430px)');
    return (

        <div style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px",
            marginBottom: "100px",
            padding: "15px"
        }}>
            <h1>Chương trình hoạt động: Gala Dinner</h1>
            <h3 style={{fontSize: "20px"}}>05-02-2024</h3>
            <p>Vào ngày 5 tháng 2 năm 2024, Sano Media đã tổ chức một đêm tiệc đầy niềm vui và ý nghĩa khi toàn thể
                nhân sự Công ty cùng gia đình cùng nhau nhìn lại hành trình một năm đầy biến động nhưng cũng không
                kém phần rực rỡ của Sano Media. Để rồi sau đó những giải thưởng vinh danh các cá nhân, tập thể xuất
                sắc trong năm qua đã được hô vang.</p>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image19.jpg" alt="image1"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image24.jpg" alt="image1"/>
            <div className="paragraph">
                <h3>Khám phá Sự Kiện Gala Dinner: Một Tối Trọn Vẹn Sự Sang Trọng và Ý Nghĩa</h3>
                <p>Gala Dinner, những sự kiện lộng lẫy kết hợp giữa sự sang trọng và mục đích cao cả, là những buổi
                    tiệc thường diễn ra dưới ánh đèn lung linh, nơi mà mọi chi tiết, từ trang trí đến thực đơn, đều
                    được tỉ mỉ sắp xếp để tạo nên một trải nghiệm không thể quên. Hãy cùng khám phá sự quyến rũ bên
                    trong những bữa tiệc đặc biệt này.</p>
            </div>
            <div className="paragraph">
                <h3>Khám phá Sự Kiện Gala Dinner: Một Tối Trọn Vẹn Sự Sang Trọng và Ý Nghĩa</h3>
                <p>Gala Dinner, những sự kiện lộng lẫy kết hợp giữa sự sang trọng và mục đích cao cả, là những
                    buổi tiệc thường diễn ra dưới ánh đèn lung linh, nơi mà mọi chi tiết, từ trang trí đến thực đơn,
                    đều
                    được tỉ mỉ sắp xếp để tạo nên một trải nghiệm không thể quên. Hãy cùng khám phá sự quyến rũ bên
                    trong những bữa tiệc đặc biệt này.</p>
            </div>
            <div className="paragraph">
                <h3>Một Sự Kiện với Ý Nghĩa Sâu Sắc</h3>
                <p>Tuy nhiên, Gala Dinner không chỉ đơn thuần là một buổi tiệc sang trọng. Đằng sau sự sang trọng,
                    Gala Dinner
                    thường là cơ hội để nhân tố bí ẩn thể hiện các tài năng khác của bản thân. Việc tổ chức Gala
                    Dinner niềm vui
                    cho các vị khách mà còn là để lan tỏa tinh thần gắn kết giữa các thành viên trong Công
                    ty.</p>
            </div>
            <div className="paragraph">
                <h3>Nhiều Khoảnh Khắc Đáng Nhớ</h3>
                <p>Với mỗi người tham dự, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một trải nghiệm
                    tuyệt vời và ý nghĩa. Từ việc được thưởng thức những món ăn ngon và hương vị độc đáo đến việc
                    tham
                    gia vào các hoạt động giải trí mang lại không khí trẻ trung,năng động, đậm nét văn hoá của Công
                    ty.
                    Mỗi khoảnh khắc trong Gala Dinner đều là một kỷ niệm đáng nhớ.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image6.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image10.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image7.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image9.jpg"/>
            <div className="paragraph">
                <h3>Vinh danh thành viên cống hiến</h3>
                <p>Bên cạnh các hoạt động vui chơi giải trí, Sano vinh danh các thành viên có những thành tích nổi
                    bật trong năm. Sano cũng tổ chức min game với các phần thưởng cho thành viên may mắn nhất.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image8.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image12.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image11.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image18.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image3.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image4.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/gala-dinner/image25.jpg"/>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Như vậy, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một cơ hội để kết nối cộng
                    đồng và lan tỏa tinh thần từ thiện. Đối với những người tham dự và tổ chức, Gala Dinner là một
                    dịp
                    để kỷ niệm và chia sẻ, mang lại những trải nghiệm không thể quên và ý nghĩa sâu sắc.</p>

            </div>
        </div>
    )
        ;
};

export default GalaDinner;