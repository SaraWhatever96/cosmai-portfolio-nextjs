function ArrowBendUpLeftIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M236,200a12,12,0,0,1-24,0,84.09,84.09,0,0,0-84-84H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L61,92h67A108.12,108.12,0,0,1,236,200Z"></path>
    </svg>
  );
}

function ArrowBendUpRightIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M232.49,112.49l-48,48a12,12,0,0,1-17-17L195,116H128a84.09,84.09,0,0,0-84,84,12,12,0,0,1-24,0A108.12,108.12,0,0,1,128,92h67L167.51,64.48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,112.49Z"></path>
    </svg>
  );
}

function BGIcon(props: React.ComponentPropsWithoutRef<'svg'>): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M16.8754 19.0444C16.2222 19.0444 15.6217 18.9391 15.0739 18.7284C14.5261 18.5282 14.0625 18.2069 13.6832 17.7644C13.304 17.3219 13.0458 16.753 12.9089 16.0577H15.1687C15.2425 16.2684 15.3583 16.4422 15.5164 16.5792C15.6849 16.7267 15.8851 16.8373 16.1169 16.911C16.3592 16.9848 16.6121 17.0216 16.8754 17.0216C17.3706 17.0216 17.7551 16.9163 18.0291 16.7056C18.303 16.4949 18.4926 16.2157 18.598 15.868C18.7033 15.5309 18.756 15.1569 18.756 14.746V14.1613C18.5664 14.4668 18.3293 14.6986 18.0449 14.8566C17.7604 15.0147 17.4601 15.1253 17.1441 15.1885C16.8386 15.2622 16.5436 15.2991 16.2591 15.2991C15.3847 15.2991 14.6735 15.1042 14.1257 14.7144C13.5779 14.3246 13.1775 13.8136 12.9247 13.1815C12.6718 12.5389 12.5454 11.8488 12.5454 11.1113C12.5454 10.3001 12.6876 9.56263 12.9721 8.8989C13.2565 8.23517 13.6832 7.70841 14.2521 7.3186C14.821 6.92879 15.5322 6.73389 16.3855 6.73389C16.9018 6.73389 17.3601 6.81817 17.7604 6.98673C18.1607 7.14477 18.5031 7.38181 18.7876 7.69787L18.9772 6.86031H21V14.1297C21 15.1411 20.8683 16.0103 20.6049 16.7372C20.3416 17.4747 19.9043 18.0436 19.2933 18.4439C18.6928 18.8443 17.8868 19.0444 16.8754 19.0444ZM16.749 13.3079C17.2126 13.3079 17.5918 13.2026 17.8868 12.9919C18.1924 12.7812 18.4189 12.502 18.5664 12.1543C18.7139 11.7961 18.7876 11.4116 18.7876 11.0007C18.7876 10.5688 18.7139 10.1842 18.5664 9.84708C18.4189 9.49941 18.1976 9.2255 17.9026 9.02532C17.6076 8.81462 17.2284 8.70926 16.7648 8.70926C16.2591 8.70926 15.8588 8.83042 15.5638 9.07273C15.2688 9.30451 15.0581 9.5995 14.9317 9.9577C14.8158 10.3054 14.7578 10.6741 14.7578 11.0639C14.7578 11.4643 14.821 11.8383 14.9475 12.1859C15.0739 12.5231 15.2846 12.797 15.5796 13.0077C15.8746 13.2079 16.2644 13.3079 16.749 13.3079Z"
        fill="currentColor"
      />
      <path
        d="M7.7409 15.2992C7.46698 15.2992 7.17726 15.2728 6.87174 15.2201C6.57675 15.1675 6.28176 15.0674 5.98677 14.9199C5.70231 14.7619 5.43366 14.5406 5.18082 14.2562L5.16501 15.1885H3V4H5.21242V7.84013C5.52848 7.46086 5.91829 7.18167 6.38184 7.00257C6.85593 6.81294 7.34583 6.71812 7.85152 6.71812C8.67328 6.71812 9.34754 6.90775 9.87431 7.28703C10.4011 7.65576 10.7909 8.16146 11.0437 8.80412C11.3071 9.44677 11.4388 10.1842 11.4388 11.0165C11.4388 11.8278 11.3071 12.56 11.0437 13.2132C10.7803 13.8558 10.3747 14.3668 9.8269 14.746C9.2896 15.1148 8.59427 15.2992 7.7409 15.2992ZM7.26681 13.3238C7.78304 13.3238 8.18339 13.2079 8.46784 12.9761C8.7523 12.7443 8.95247 12.4493 9.06836 12.0911C9.18425 11.7329 9.24219 11.3589 9.24219 10.9691C9.24219 10.5793 9.17898 10.2159 9.05255 9.87872C8.92613 9.53105 8.71542 9.25714 8.42043 9.05696C8.13598 8.84626 7.75144 8.7409 7.26681 8.7409C6.82433 8.7409 6.44506 8.85152 6.129 9.07277C5.82347 9.28347 5.59169 9.56266 5.43366 9.91033C5.27563 10.258 5.19662 10.632 5.19662 11.0323C5.19662 11.4327 5.2651 11.812 5.40206 12.1702C5.54955 12.5178 5.77606 12.797 6.08159 13.0077C6.38711 13.2184 6.78219 13.3238 7.26681 13.3238Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeartIcon(props: React.ComponentPropsWithoutRef<'svg'>): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M21 8.98829C21.0014 9.64275 20.8813 10.291 20.6469 10.8956C20.4124 11.5001 20.0682 12.049 19.634 12.5104L12.4587 20.295C12.3989 20.3599 12.3276 20.4115 12.249 20.4467C12.1704 20.4819 12.086 20.5 12.0007 20.5C11.9155 20.5 11.8311 20.4819 11.7525 20.4467C11.6738 20.4115 11.6025 20.3599 11.5427 20.295L4.36742 12.5104C3.49263 11.5762 3.00075 10.3089 3 8.98703C2.99925 7.66519 3.48968 6.39718 4.3634 5.46193C5.23712 4.52668 6.42257 4.00081 7.65895 4C8.89533 3.9992 10.0814 4.52352 10.9562 5.45763L12.0007 6.50137L13.0525 5.45419C13.7053 4.75974 14.5359 4.28762 15.4395 4.09745C16.3431 3.90728 17.2791 4.00759 18.1294 4.3857C18.9797 4.76381 19.7062 5.40278 20.2171 6.22194C20.728 7.0411 21.0004 8.00372 21 8.98829Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProfileCircleIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0002 15C14.0713 15 15.7502 13.3211 15.7502 11.25C15.7502 9.17893 14.0713 7.5 12.0002 7.5C9.92918 7.5 8.25024 9.17893 8.25024 11.25C8.25024 13.3211 9.92918 15 12.0002 15Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.98071 18.6909C6.545 17.5794 7.40605 16.6459 8.46841 15.9938C9.53077 15.3418 10.7529 14.9966 11.9995 14.9966C13.246 14.9966 14.4682 15.3418 15.5305 15.9938C16.5929 16.6459 17.4539 17.5794 18.0182 18.6909L17.8272 18.8586C16.257 20.1941 14.2223 21 11.9995 21C9.71857 21 7.63584 20.1515 6.0497 18.7529L5.98071 18.6909Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PackageIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
    </svg>
  );
}

function CheckBadgeIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );
}

function ChevronRightIcon(
  props: React.ComponentPropsWithRef<'svg'>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function ChevronLeftIcon(
  props: React.ComponentPropsWithRef<'svg'>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ExternalLinkIcon(
  props: React.ComponentPropsWithRef<'svg'>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"></path>
    </svg>
  );
}

function CheckIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z"></path>
    </svg>
  );
}

function SideBarIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,60H76V196H44ZM212,196H100V60H212Z"></path>
    </svg>
  );
}

function ShareIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>
    </svg>
  );
}

function PlusIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
    </svg>
  );
}

function CopyIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"></path>
    </svg>
  );
}

function SearchIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
    </svg>
  );
}

function ProfileIcon(props: React.ComponentPropsWithRef<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M11.6061 14.7233C14.5671 14.7233 16.9675 12.3228 16.9675 9.36165C16.9675 6.40049 14.5671 4 11.6061 4C8.64503 4 6.24463 6.40049 6.24463 9.36165C6.24463 12.3228 8.64503 14.7233 11.6061 14.7233Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19.9998C3.80678 18.4107 5.03783 17.0759 6.5567 16.1436C8.07557 15.2113 9.82293 14.7178 11.6051 14.7178C13.3873 14.7178 15.1346 15.2113 16.6535 16.1436C18.1724 17.0759 19.4034 18.4107 20.2102 19.9998"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoldIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M185.08,114.46A48,48,0,0,0,148,36H80A12,12,0,0,0,68,48V200a12,12,0,0,0,12,12h80a52,52,0,0,0,25.08-97.54ZM92,60h56a24,24,0,0,1,0,48H92Zm68,128H92V132h68a28,28,0,0,1,0,56Z"></path>
    </svg>
  );
}

function ItalicIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M204,56a12,12,0,0,1-12,12H160.65l-40,120H144a12,12,0,0,1,0,24H64a12,12,0,0,1,0-24H95.35l40-120H112a12,12,0,0,1,0-24h80A12,12,0,0,1,204,56Z"></path>
    </svg>
  );
}

function UnderlineIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M204,224a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,224Zm-76-28a68.07,68.07,0,0,0,68-68V56a12,12,0,0,0-24,0v72a44,44,0,0,1-88,0V56a12,12,0,0,0-24,0v72A68.07,68.07,0,0,0,128,196Z"></path>
    </svg>
  );
}

function TextAlignLeftIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"></path>
    </svg>
  );
}

function TextAlignRightIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
    </svg>
  );
}

function TextAlignJustifyIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
    </svg>
  );
}

function TextAlignCenterIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM64,92a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Zm152,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-24,40H64a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Z"></path>
    </svg>
  );
}

function UserThoughtsIcon(props: React.ComponentPropsWithRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.95328 20.25L12.0002 23.1413L14.047 20.25H20.2502V3.75H3.75015V20.25H9.95328Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0002 13.5C13.657 13.5 15.0002 12.1569 15.0002 10.5C15.0002 8.84315 13.657 7.5 12.0002 7.5C10.3433 7.5 9.00015 8.84315 9.00015 10.5C9.00015 12.1569 10.3433 13.5 12.0002 13.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50015 15.75C8.0241 15.0514 8.70351 14.4844 9.48458 14.0938C10.2656 13.7033 11.1269 13.5 12.0002 13.5C12.8734 13.5 13.7347 13.7033 14.5157 14.0938C15.2968 14.4844 15.9762 15.0514 16.5002 15.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export {
  ArrowBendUpLeftIcon,
  ArrowBendUpRightIcon,
  BGIcon,
  BoldIcon,
  CheckBadgeIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  ExternalLinkIcon,
  HeartIcon,
  ItalicIcon,
  PackageIcon,
  PlusIcon,
  ProfileCircleIcon,
  ProfileIcon,
  SearchIcon,
  ShareIcon,
  SideBarIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  UnderlineIcon,
  UserThoughtsIcon,
};
