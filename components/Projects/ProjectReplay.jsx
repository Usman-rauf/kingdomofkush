import { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { AppContext } from "@/context/AppProvider";
import useSweetAlert from "@/assets/plugins/sweetalert2";
import axios from "axios";
export default function ProjectReplay({ projectId }) {
    const InitReplay = {
        Name: '',
        Email: '',
        Phone: '',
        Message: '',
        ProjectId: projectId,
    }
    const { countryCode } = useContext(AppContext);
    const [isFetching, setFetching] = useState(false);
    const { showSuccess, showError } = useSweetAlert();
    const [replay, setReplay] = useState(InitReplay);
    const handleReplaySubmit = (e) => {
        e.preventDefault();
        setFetching(true);
        axios.post(`/api/project/replay`, replay).then(({ data }) => {
            showSuccess.fire(data.status).then(() => {
                setReplay(InitReplay);
            });
        }).catch(() => {
            showError.fire('Opps! We are currently unable to get request');
        }).finally(() => setFetching(false))
    }
    return <div style={{ backgroundColor: "rgba(150, 144, 162, 0.06)" }}>
        <div className="my-8 pt-16 p-3 container mx-auto">
            <h4 className="text-[22px] font-semibold mb-5">Leave a replay</h4>
            <p className="mb-8 text-[15px]">
                Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleReplaySubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="flex flex-col">
                        <label className="input-label-required">Full Name</label>
                        <input
                            required
                            placeholder="Name"
                            value={replay.Name}
                            disabled={isFetching}
                            className="input-text"
                            onChange={({ target }) => setReplay({ ...replay, Name: target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label className="input-label-required">Email</label>
                        <input
                            required
                            type="email"
                            placeholder="Email"
                            value={replay.Email}
                            disabled={isFetching}
                            className="input-text"
                            onChange={({ target }) => setReplay({ ...replay, Email: target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label className="input-label-required">Phone</label>
                        <PhoneInput
                            required
                            international
                            value={replay.Phone}
                            disabled={isFetching}
                            className="input-phone"
                            defaultCountry={countryCode}
                            onChange={(event) => setReplay({ ...replay, Phone: event })} />
                    </div>
                </div>
                <div className="mt-2">
                    <label className="input-label-required">Message</label>
                    <textarea
                        required
                        placeholder="Message"
                        disabled={isFetching}
                        className="input-text"
                        value={replay.Message}
                        onChange={({ target }) => setReplay({ ...replay, Message: target.value })} />
                </div>
                <div className="my-6 xl:w-[30%] w-[50%]">
                    <button type={isFetching ? 'disabled' : 'submit'} className="btn-submit">
                        {isFetching ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </form>
        </div>
    </div>
}