export default function Footer() {
  return (
    <footer className="bg-light-blue py-4">
      <div className="container flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="">
          <img src="/images/footer-logo.png" alt="logo" />
        </div>
        <p className="font-bold text-[#63769d]">
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
