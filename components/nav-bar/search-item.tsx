import React from "react";

export const SearchItem = () => {
    const [focused, setFocused] = React.useState(false);
    const [value, setValue] = React.useState("");

    const handleFocus = () => setFocused(true);
    const handleBlur = () => {
        if (value === "") setFocused(false);
    };
    const handleSearch = () => {
        if (value !== "") {
            window.location.href = "/category?search=" + value;
        }
    }

    return (
        <div className="flex justify-center items-center invisible md:visible">
            <div className="relative">
                <input
                    type="text"
                    className={`bg-gray-200 h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${
                        focused ? "w-[11vw]" : "w-[2vw]"
                    }`}
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <button
                    type="submit"
                    className="absolute p-3 right-0"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onClick={handleSearch}
                >
                    <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};



