import Link from "next/link";

const DialogMessage = ({ onClose }) => {

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50"
      onClick={() => onClose()}
    >
      <div
        className="bg-orange-100 w-1/3 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-orange-800">Bienvenido, pero antes...</h3>
        <p className="text-gray-700 mt-2">
          Deberás hacer una prueba de aptitud antes de comenzar con este test.
        </p>
        <Link href={"test/psychological-test"} >
          <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Ir a la prueba!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DialogMessage;