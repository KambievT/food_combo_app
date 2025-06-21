import "leaflet/dist/leaflet.css";

export default function MapBlock() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden">
      <div className="flex justify-center mb-10">
        <h1 className="text-3xl text-center">Наше заведение на карте</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1414.705483692401!2d41.38427665748018!3d44.83356335896822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDUwJzAwLjgiTiA0McKwMjMnMDYuNyJF!5e0!3m2!1sru!2sru!4v1750534299690!5m2!1sru!2sru"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
