import CustomButton from "./CustomButton";

const RegistrationForm = () => {
  return (
    <form className="p-6 lg:p-8 rounded-[24px] bg-gray-02 flex flex-col gap-6">
      {/* Name & Email */}
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-6">
        {/* Name */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="Name">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="py-[10px] px-[12px] rounded-[10px] bg-white font-normal text-[14px] leading-[100%] tracking-0 text-gray-03 placeholder:text-gray-03"
          />
        </div>
        {/* Email */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            className="py-[10px] px-[12px] rounded-[10px] bg-white font-normal text-[14px] leading-[100%] tracking-0 text-gray-03 placeholder:text-gray-03"
          />
        </div>
      </div>

      {/* Company & Country */}
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-6">
        {/* Company */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Your company"
            className="py-[10px] px-[12px] rounded-[10px] bg-white font-normal text-[14px] leading-[100%] tracking-0 text-gray-03 placeholder:text-gray-03"
          />
        </div>
        {/* Country */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            className="py-[10px] px-[12px] rounded-[10px] bg-white font-normal text-[14px] leading-[100%] tracking-0 text-gray-03 placeholder:text-gray-03"
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      {/* Message */}
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="message">Message *</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          rows={4}
          className="py-[8px] px-[12px] rounded-[10px] bg-white font-normal text-[14px] leading-[100%] tracking-0 text-gray-03 placeholder:text-gray-03"
        />
      </div>
      <CustomButton
        variant="form"
        className="py-[12px] px-[16px] rounded-[10px] font-medium text-[14px] leading-[21px] tracking-0"
      >
        Send Message
      </CustomButton>
    </form>
  );
};

export default RegistrationForm;
