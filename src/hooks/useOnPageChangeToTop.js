import { useEffect } from "react";

const useOnPageChangeToTop = (id) => {
    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    }, [id]);
};

export default useOnPageChangeToTop;
