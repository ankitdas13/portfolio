export default function Footer() {
    return (
        <footer className='px-5 pt-20'>
            <div className="footer-content flex gap-4">
                <div className="contact-info">
                    <h3 className='text-2xl font-bold text-center mb-4'>CHAT</h3>
                    <p className='text-[#808CAD] text-lg'>Telegram</p>
                </div>
                <div className="contact-info">
                    <h3 className='text-2xl font-bold text-center mb-4'>EMAIL</h3>
                    <p className='text-[#808CAD] text-lg'>ankitdas10204@gmail.com</p>
                </div>
            </div>
            <div className="copyright m-10">
                <p className="text-[#808CAD] text-lg text-center">Copyright &copy; Developed by Ankit Das. All right reserved.</p>
            </div>
        </footer>
    )
}