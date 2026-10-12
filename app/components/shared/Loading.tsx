
const Loading = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center font-digital">
      <div className="loader">
        <div data-glitch="Loading..." className="glitch text-4xl md:text-7xl">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
