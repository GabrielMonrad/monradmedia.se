import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const CookiePrompt = () => {
  const [accepted, setAccepted] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPrompt(true);
    }, 5000); // Delay of 5000 milliseconds (5 seconds)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const cookieAccepted = Cookies.get("cookieAccepted");
    if (cookieAccepted === "true") {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // Expires after 30 days
    Cookies.set("cookieAccepted", "true", {
      expires: expirationDate,
      path: "/", // Adjust the options based on your requirements
    });
    setAccepted(true);
  };

  const handlePreferenceChange = (type) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: !prevPreferences[type],
    }));
  };

  useEffect(() => {
    if (accepted) {
      // Save the cookie preferences to the server for further processing and storing on the user's profile.
      // Example: Send an API request to the server with the preferences.
      // Replace API_ENDPOINT with the actual endpoint where you handle the preferences on the server.
      fetch("www.mentdev.com/api/preferences", {
        method: "POST",
        body: JSON.stringify(preferences),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          // Handle the response from the server if needed
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [accepted, preferences]);

  const closeCookiePrompt = () => {
    setAccepted(true);
  };

  if (!showPrompt || accepted) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-30 backdrop-blur-md ">
        <div className="bg-white/95 p-8 rounded-xl shadow-md text-black mx-10">
          <div className="flex justify-start">
            <h1 className="text-3xl font-bold mb-4 jus">Cookie Acceptance</h1>
          </div>
          <p className="mb-4">
            MONRAD MEDIA uses cookies to enhance your experience. <br />
            By accepting, you consent to our use of cookies. <br />
            <Link href="/policy">
              <button className="text-blue-500">Read More</button>
            </Link>
          </p>
          <div className="mb-4">
            <p>Manage your cookie preferences:</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="functional"
                checked={preferences.functional}
                onChange={() => handlePreferenceChange("functional")}
                className="mr-2"
              />
              <label htmlFor="functional">Functional Cookies</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="analytics"
                checked={preferences.analytics}
                onChange={() => handlePreferenceChange("analytics")}
                className="mr-2"
              />
              <label htmlFor="analytics">Analytics Cookies</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="marketing"
                checked={preferences.marketing}
                onChange={() => handlePreferenceChange("marketing")}
                className="mr-2"
              />
              <label htmlFor="marketing">Marketing Cookies</label>
            </div>
          </div>
          <button
            className="px-4 w-full rounded-xl py-2 bg-gray-900 text-white  hover:scale-105 hover:bg-gray-950 duration-300 "
            onClick={() => {
              handleAccept();
              closeCookiePrompt();
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie;
  if (cookies && cookies.includes("cookieAccepted=true")) {
    return {
      props: {
        accepted: true,
      },
    };
  }
  return {
    props: {
      accepted: false,
    },
  };
}

export default CookiePrompt;
