import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1>404!! Page Not Found!!!</h1>
            <Link href="/"><button className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-4'>Go Home</button></Link>
        </div >
    );
};

export default NotFoundPage;