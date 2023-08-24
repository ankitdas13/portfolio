export default function Footer() {
    return (
        <footer className='px-5 pt-20'>
            <div className="footer-content flex gap-4">
                <div className="contact-info">
                    <h3 className='text-2xl font-bold text-center mb-4'>CHAT</h3>
                    <a className='text-[#808CAD] text-lg' href="https://t.me/Ankit10204">Telegram</a>
                </div>
                <div className="contact-info">
                    <h3 className='text-2xl font-bold text-center mb-4'>EMAIL</h3>
                    <a className='text-[#808CAD] text-lg' href="mailto:ankitdas10204@gmail.com">ankitdas10204@gmail.com</a>
                </div>
            </div>
            <div className="copyright m-10">
                <p className="text-[#808CAD] text-lg text-center">Copyright &copy; Developed by <a className="text-blue-400" href="https://ankitdas.dev/">Ankit Das</a>. All right reserved.</p>
            </div>
        </footer>
    )
}