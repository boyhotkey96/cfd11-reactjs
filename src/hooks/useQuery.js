import { useEffect, useState } from "react";

const useQuery = (cbPromise, depen) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log('useEffect running: ')
        setLoading(true)
        cbPromise()
            .then((res) => {
                // console.log(res)
                setData(res.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, depen)

    return { data, loading, error };
};

export default useQuery;
