export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group
     hover:bg-white hover:shadow-md hover:shadow-black/25  transition-all ">
        <div className="text-center">
        <img src="/pizza.png" className="max-h-auto max-h24 block mx-auto" alt="" />
        </div>
        <h3 c  lassName="font-semibold text-3xl pb-3">
            ፔፔሮኒ ፒዛ</h3>
        <p className="text-gray-500 text-sm">Dirkosh gives you caloris your body is missing and
             it will help youto increase brain cells</p>
        <button className="bg-primary text-white rounded-full px-10 py-3 m-3 ">ይዘዙ</button>
    </div>
  )
}
