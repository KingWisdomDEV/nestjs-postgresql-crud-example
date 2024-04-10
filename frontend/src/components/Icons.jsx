import clsx from "clsx";

export const IconLoading = ({ className = "w-4 h-4" }) => (
  <svg
    className={clsx("animate-spin", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      className="opacity-25"
    ></circle>
    <path
      fill="currentColor"
      className="opacity-75"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export const IconCopy = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7054 2.35161H4.0344C3.11333 2.35161 2.36666 3.09828 2.36666 4.01935V10.6903C2.36666 11.3216 2.71744 11.871 3.23474 12.1542C3.63871 12.3753 4.0344 12.7314 4.0344 13.1919C4.0344 13.6525 3.65526 14.0365 3.20896 13.9229C1.76607 13.5555 0.698914 12.2476 0.698914 10.6903V4.01935C0.698914 2.17722 2.19226 0.683868 4.0344 0.683868H10.7054C12.2626 0.683868 13.5706 1.75102 13.9379 3.19392C14.0515 3.64022 13.6675 4.01935 13.207 4.01935C12.7464 4.01935 12.3904 3.62366 12.1692 3.21969C11.8861 2.7024 11.3367 2.35161 10.7054 2.35161ZM8.48172 6.79893H15.1527C16.0738 6.79893 16.8204 7.5456 16.8204 8.46667V15.1376C16.8204 16.0587 16.0738 16.8054 15.1527 16.8054H8.48172C7.56065 16.8054 6.81398 16.0587 6.81398 15.1376V8.46667C6.81398 7.5456 7.56065 6.79893 8.48172 6.79893ZM5.14624 8.46667C5.14624 6.62453 6.63959 5.13119 8.48172 5.13119H15.1527C16.9948 5.13119 18.4882 6.62453 18.4882 8.46667V15.1376C18.4882 16.9798 16.9948 18.4731 15.1527 18.4731H8.48172C6.63958 18.4731 5.14624 16.9798 5.14624 15.1376V8.46667Z"
      fill="white"
    />
  </svg>
);

export const IconCTA = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0252 45.8556C35.4823 45.8556 45.5808 35.7571 45.5808 23.3C45.5808 10.8429 35.4823 0.744438 23.0252 0.744438C10.5681 0.744438 0.469666 10.8429 0.469666 23.3C0.469666 35.7571 10.5681 45.8556 23.0252 45.8556ZM23.2878 15.202C22.8639 14.7456 22.1504 14.7192 21.6939 15.143C21.2375 15.5668 21.2111 16.2804 21.6349 16.7368L27.2057 22.7361H15.1308C14.5079 22.7361 14.003 23.241 14.003 23.8639C14.003 24.4867 14.5079 24.9917 15.1308 24.9917H27.2057L21.6349 30.9909C21.2111 31.4474 21.2375 32.1609 21.6939 32.5848C22.1504 33.0086 22.8639 32.9821 23.2878 32.5257L31.3309 23.8639L23.2878 15.202Z"
      fill="#151515"
    />
  </svg>
);
