import "./App.css";
import Footer from "./Footer";
import OtherOptions from "./OtherOptions";

const Input = ({ label }: { label: string }) => {
  return (
    <div className="relative my-4">
      <label className="absolute -top-3 left-4 bg-white">{label}</label>
      <input type="text" className="w-[500px] rounded border-2 px-4 py-3" />
    </div>
  );
};

function App() {
  return (
    <div>
      {" "}
      <main className="background text-gray-500">
        <div className="rounded-xl border-2 p-8 shadow-lg shadow-gray-300">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold text-black">Login</h1>
            <p className="my-2">Please Sign In to continue</p>
          </div>
          <div>
            <Input label="E-mail" />
            <Input label="Password" />
          </div>
          <div className="my-2 flex justify-between ">
            <div>
              <input className="mr-2" type="checkbox" name="" id="" />
              <span>Remember Me</span>
            </div>
            <span>Forget Password ? </span>
          </div>
          <div>
            <button className="w-full rounded bg-[#0279b5] px-2 py-2 font-bold text-white">
              Login
            </button>
          </div>

          <div className="relative my-12">
            <div className=" absolute -top-4 left-1/2 -translate-x-1/2  bg-white px-8 text-lg">
              Or Use
            </div>
            <div className="w-full border"></div>
          </div>

          <div>
            <OtherOptions />
          </div>
          <div className="mt-8">
            <p className="flex justify-center">
              New User?
              <span className="ml-2 font-bold text-[#0279b5]">
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
