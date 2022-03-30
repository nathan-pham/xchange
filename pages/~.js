import Root from "components/Root";
import Wrapper from "components/Wrapper";

import Header from "components/atoms/Header";
import Footer from "components/atoms/Footer";
import Sidebar from "components/pages/dashboard/Sidebar";

import Post from "components/pages/dashboard/Post";

const Dashboard = () => {
    return (
        <Root>
            <Wrapper>
                <Header />

                <div className="flex gap-10">
                    <Sidebar />
                    <main className="w-full">
                        <div className="p-4 bg-slate-100 flex gap-4">
                            <img
                                src="https://avatars.githubusercontent.com/u/43102813?v=4"
                                className="h-12 w-12"
                            />

                            <div className="w-full">
                                <textarea
                                    className="w-full outline-none resize-y p-4 border"
                                    placeholder="What do you have to offer?"
                                ></textarea>

                                <div className="w-full flex items-center justify-between mt-2">
                                    <select className="border p-2 outline-none">
                                        <option selected>Seed Packet</option>
                                        <option>Seedling</option>
                                        <option>Vegetating Plant</option>
                                    </select>
                                    <button className="bg-blue-500 text-white px-4 py-2">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                        {new Array(40).fill(0).map((_, i) => (
                            <Post key={i} />
                        ))}
                    </main>
                </div>

                <Footer />
            </Wrapper>
        </Root>
    );
};

export default Dashboard;
