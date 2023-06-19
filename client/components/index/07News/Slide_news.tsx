function truncateString(str: string) {
    if (str.length <= 50) {
      return str;
    } else {
      return str.substring(0, 50);
    }
}

export default function Slide_news( { date, title, text }: { date: Date, title: string, text: string} ){

    const formattedDate = date.toLocaleDateString();
    return(
        <div className="flex flex-col bg-white rounded-2xl">
            <div>
                { formattedDate }
            </div>
            <div>
                { title }
            </div>
            <div className="flex">
                <p className="block w-10/12">
                    { truncateString(text) }
                </p>
                <button className="block w-2/12">
                    {`>`}
                </button>
            </div>
        </div>
    )
}