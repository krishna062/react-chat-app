import Input from "../../components/Input"
const Form = () => {
  return (
    <div className="bg-white w-[500px] h-[600px]  shadow-lg rounded-lg flex flex-col justify-center items-center ">
        <div className="text-4xl font-extrabold">Welcome</div>
        <div className="text-xl font-light mb-14">Sign Up to get started</div>
        <Input label="Full Name" name="name" placeholder="Enter your full name" className="mb-6"/>
        <Input label="Email Address" name="name" placeholder="Enter your email" className="mb-6"/>
        <Input label="Password" name="name" placeholder="Enter your password" className="mb-6"/>
    </div>
   
  )
}

export default Form