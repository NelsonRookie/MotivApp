import { FaRegLightbulb } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";
import { MdOutlineFormatQuote } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Index() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-8">
        About This App
      </h1>

      <div className="space-y-12">
        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              What is this app?
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              This app is your personal productivity companion. It allows you to
              track your goals, save inspiring quotes, and collect inspirations
              to keep you motivated. Whether you&apos;re looking to stay
              organized, inspired, or simply need a creative space, this app has
              got you covered!
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Features
          </h2>
          <ul className="space-y-8 text-lg text-gray-800">
            <li className="flex items-center gap-4">
              <FaRegLightbulb className="text-4xl text-yellow-500" />
              <span>Track and manage your personal goals with ease</span>
            </li>
            <li className="flex items-center gap-4">
              <GiTargetArrows className="text-4xl text-green-500" />
              <span>Set milestones and celebrate your progress</span>
            </li>
            <li className="flex items-center gap-4">
              <MdOutlineFormatQuote className="text-4xl text-purple-500" />
              <span>Save your favorite quotes and revisit them anytime</span>
            </li>
            <li className="flex items-center gap-4">
              <HiOutlinePhotograph className="text-4xl text-pink-500" />
              <span>Store and organize your sources of inspiration</span>
            </li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="bg-indigo-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            1. <strong>Create Goals:</strong> Set your goals and track your
            progress.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            2. <strong>Save Quotes:</strong> Add quotes that inspire you and
            keep them organized.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            3. <strong>Collect Inspirations:</strong> Save images and ideas that
            motivate you.
          </p>
        </section>

        {/* Developer Section */}
      </div>
    </div>
  );
}
