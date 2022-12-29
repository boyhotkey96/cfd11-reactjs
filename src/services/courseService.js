import api from "../config/api";

const courseService = {
    getCourse() {
        return api.get("/elearning/v4/courses", {
          headers: {
            "content-type": "application/json",
          },
        });
    },
    getCourseDetail(id) {
        return api.get(`/elearning/v4/courses/${id}`);
    }
};

export default courseService;
