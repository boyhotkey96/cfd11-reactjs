import { useRef } from "react";
import { usePage } from "../../hooks/usePage";

function Profile() {
    // const [login, setLogin] = useState(true)
    const { user } = usePage();
    const phoneRef = useRef();

    return (
        <div className="tab1">
            {/* {login || <Navigate to='/' />} */}
            <label>
                <p>
                    Họ và tên<span>*</span>
                </p>
                <input type="text" placeholder="Nguyễn Văn A" />
            </label>
            <label>
                <p>
                    Số điện thoại<span>*</span>
                </p>
                <input
                    ref={phoneRef}
                    type="text"
                    placeholder={user.phone || "0949******"}
                    defaultValue={user.phone || "0974230141"}
                    onChange={(e) => (phoneRef.current = e.target.value)}
                />
            </label>
            <label>
                <p>
                    Email<span>*</span>
                </p>
                <input defaultValue={user.email} disabled type="text" />
            </label>
            <label>
                <p>
                    Facebook<span>*</span>
                </p>
                <input type="text" placeholder="Facebook url" />
            </label>
            <label>
                <p>
                    Skype<span>*</span>
                </p>
                <input type="text" placeholder="Skype url" />
            </label>
            <div className="btn main rect">LƯU LẠI</div>
        </div>
    );
}

export default Profile;
