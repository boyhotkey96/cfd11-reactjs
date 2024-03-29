import { useEffect } from "react";
import Course from "../components/Course";
import TeamSection from "../components/TeamSection";
import useQuery from "../hooks/useQuery";
import courseService from "../services/courseService";

function Home() {
  const { data, loading } = useQuery(() => courseService.getCourse(), []);
  console.log(data);

  useEffect(() => {
    // Using fetch api
    /* fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/courses")
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            const { data } = response;
            setData(data);
            return response;
        }); */
    // Using Axios api
    /* courseService
            .getCourse()
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((error) => {
                setEror(error);
            })
            .finally(() => {
                setLoading(false);
            }); */
  }, []);

  return (
    <main className="homepage" id="main">
      <div className="banner jarallax">
        <div className="container">
          <div className="content">
            <h2 className="title">Thực Chiến</h2>
            <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
            <div className="btn main round">KHÓA HỌC</div>
          </div>
        </div>
        <div className="jarallax-img">
          <img data-src="img/bg-cover.jpg" alt="" className="lazyload" />
          <div
            className="video-bg lazyload"
            data-src="video/CFD-video-bg2.mp4"
          />
        </div>
      </div>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            {loading ? (
              <p>Đang tải dữ liệu!</p>
            ) : (
              data.map((course) => <Course key={course.id} {...course} />)
            )}
          </div>
        </div>
      </section>
      <section className="section-different">
        <div className="container">
          <div className="row">
            <div className="titlebox col-md-6 col-sm-12 col-xs-12">
              <h2 className="main-title white textleft">
                Những điều <br />
                <span>đặc biệt</span> tại CFD
              </h2>
              <div className="videodif" data-src="video/CFD-video-intro.mp4">
                <img src="img/img-cfd-dac-biet.jpg" alt="" />
                <div className="play-btn btn-video-intro">
                  <img src="img/play-icon.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="contentbox col-md-6 col-sm-12 col-xs-12">
              <div className="item">
                <h4>Không cam kết đầu ra</h4>
                <p>
                  Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như
                  cả người hướng dẫn và người học không thật sự tâm huyết và cố
                  gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các thành
                  viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                </p>
              </div>
              <div className="item">
                <h4>Không chỉ là một lớp học</h4>
                <p>
                  CFD không phải một lớp học thuần túy, tất cả thành viên là một
                  team, cùng hổ trợ, chia sẻ và giúp đỡ nhau trong suốt quá
                  trình học và sau này, với sự hướng dẫn tận tâm của các thành
                  viên đồng sáng lập.
                </p>
              </div>
              <div className="item">
                <h4>Không để ai bị bỏ lại phía sau</h4>
                <p>
                  Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ
                  được đội ngũ CFD kèm cặp đặc biệt, cùng sự hổ trợ từ các thành
                  viên khác. Vì mục tiêu cuối cùng là hoàn thành khóa học thật
                  tốt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-3">
            <div className="container">
                <div className="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div className="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div className="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
      <section className="section-testimonial">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
          </div>
          <div className="testimonial">
            <div className="testimonial-item">
              <div className="item">
                <div className="text">
                  <div className="ct ct-1 active">
                    <div className="info">
                      <div className="name">
                        <h4>Tiến Tài</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">
                      Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập
                      trình front-end qua khóa học. Like cho 4 mentor.
                    </div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="img/facebook.svg" alt="" />
                      </a>
                      <span>09/10/2020</span>
                    </div>
                  </div>
                  <div className="ct ct-2">
                    <div className="info">
                      <div className="name">
                        <h4>Phạm Thành Trung</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sollicitudin libero id magna finibus, in maximus urna
                      tincidunt. Nam at leo lacinia, interdum dolor in, molestie
                      lectus. Aenean porttitor purus at purus euismod tristique
                    </div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="img/facebook.svg" alt="" />
                      </a>
                      <span>01/10/2020</span>
                    </div>
                  </div>
                  <div className="ct ct-3">
                    <div className="info">
                      <div className="name">
                        <h4>Nguyễn Văn Tuấn</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sollicitudin libero id magna finibus, in maximus urna
                      tincidunt. Nam at leo lacinia, interdum dolor in, molestie
                      lectus. Aenean porttitor purus at purus euismod tristique
                    </div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="img/facebook.svg" alt="" />
                      </a>
                      <span>01/10/2020</span>
                    </div>
                  </div>
                </div>
                <div className="images">
                  <div className="list">
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="img/Intersect.png"
                          />
                          <img data-flickity-lazyload="img/tes.jpg" alt="" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Tiến Tài</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="img/quotes.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                          lập trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="img/facebook.svg" alt="" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="img/Intersect.png"
                          />
                          <img data-flickity-lazyload="img/tes.jpg" alt="" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Nguyễn Văn Tuấn</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="img/quotes.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                          lập trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="img/facebook.svg" alt="" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="img/Intersect.png"
                          />
                          <img data-flickity-lazyload="img/tes.jpg" alt="" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Phạm Thành Trung</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="img/quotes.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                          lập trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="img/facebook.svg" alt="" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dots" />
              <div className="btn_ctr prev" />
              <div className="btn_ctr next" />
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <section className="section-action">
        <div className="container">
          <h3>
            Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
          </h3>
          <div className="btn main round bg-white">Đăng ký</div>
        </div>
      </section>
    </main>
  );
}

export default Home;
