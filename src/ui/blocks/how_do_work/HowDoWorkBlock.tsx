import style from "./style.module.scss"
import {mainPageIds} from "@/utils/Const";

export default function HowDoWorkBlock() {

    const blocks = [
        "Планування проєкту: Ми починаємо з уважного планування кожного проєкту,де чітко визначаємо цілі, завдання, місце проведення, обʼєми роботи, кількість залучених дітей.",
        "Пошук шляхів реалізації: Наша команда разом із партнерами шукає шляхи реалізації проектів із залученням поточних та потенційних ресурсів.",
        "Забезпечення фінансування: Важливим кроком є підрахунок вартості реалізації проєкту, пошук фінансової підтримки для виконання проєкту.",
        "Набір дітей в табір: Ми відкриваємо можливість для дітей приєднатися до наших таборів, де вони можуть знайти незабутні пригоди та навчатися новому.",
        "Реалізація проєкту: З нашою наполегливістю, відданістю та сторонньою підтримкою ми реалізовуємо кожен проєкт, даруючи дітям яскраві миті їхнього дитинства та надаючи можливість досягти успіху та розвитку."
    ]

    return (
        <div className={style.container} id={mainPageIds.work}>
            <div className={style.block}>
                <h3>
                    Наша методика роботи включає наступні кроки:
                </h3>
                <div className={style.grid}>
                    {
                        blocks.map((item, index) => (
                            <div key={index} className={style.grid_item}>
                                <p className={style.grid_item_index}>
                                    {index + 1}.
                                </p>
                                <p className={style.grid_item_text}>
                                    {item}
                                </p>
                            </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}