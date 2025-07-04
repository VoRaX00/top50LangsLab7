import C from './images/c.jpg';
import Csharp from '/home/nikita/WebstormProjects/top_50_langs/src/images/c#.png'
import Go from './images/go.jpg'
import Rust from './images/rust.png'

const structures = [
    {
        img: C,
        title: "Язык С",
        subtitle: [
            "современный",
            "язык программирования"
        ],
        description: [
            `Си (от лат. буквы C с англ. языка) — компилируемый статически типизированный язык программирования общего назначения, разработанный в 1969—1973 годах.
                Язык программирования Си оказал существенное влияние на развитие индустрии программного обеспечения, а его синтаксис стал основой для таких языков программирования,
                как C++, C#, Java и Objective-C.`
        ],
    },
    {
        img: Go,
        title: "Golang",
        subtitle: [
            "современный",
            "язык программирования"
        ],
        description: [
            `Go (или Golang) — это статически типизированный, компилируемый язык программирования, разработанный в Google. Он создан для простоты, 
            скорости и удобства масштабирования. Go сочетает производительность низкоуровневых языков (как C) с лаконичным синтаксисом и встроенной 
            поддержкой параллелизма через **goroutines**. Он отлично подходит для серверных приложений, микросервисов и системного программирования.`
        ]
    },
    {
        img: C,
        title: "C++",
        subtitle: [
            "современный",
            "язык программирования"
        ],
        description: [
            `C++ — это мощный, статически типизированный язык программирования общего назначения, основанный на языке C. Он 
            поддерживает как процедурное, так и объектно-ориентированное программирование, а также шаблоны и метапрограммирование. 
            C++ широко используется в разработке высокопроизводительных приложений, таких как игры, системы реального времени, операционные системы и драйверы. 
            Язык предоставляет тонкий контроль над памятью и ресурсами, что делает его эффективным, но требует аккуратности от разработчика.
`
        ]
    },
    {
        img: Rust,
        title: "Rust",
        subtitle: [
            "современный",
            "язык программирования"
        ],
        description: [
            `Rust — это современный системный язык программирования, разработанный с акцентом на безопасность, производительность и параллелизм. 
            Он обеспечивает контроль над памятью без сборщика мусора (GC), предотвращая целый класс ошибок во время компиляции — например, 
            ошибки с доступом к памяти и гонки данных. Rust сочетает низкоуровневую мощь C/C++ с безопасностью на уровне типов и удобными инструментами. 
            Язык активно используется для создания надёжных систем, веб-серверов, встраиваемых решений и разработок с высокими требованиями к безопасности и стабильности.`
        ]
    },
    {
        img: Csharp,
        title: "C#",
        subtitle: [
            "современный",
            "язык программирования"
        ],
        description: []
    },
    {
        img: "",
        title: "Kotlin",
        subtitle: [
            "современный",
            "язык программирования"
        ],
        description: [
            `Kotlin (Котлин) — кроссплатформенный, статически типизированный, объектно-ориентированный язык программирования, работающий поверх Java Virtual Machine и разрабатываемый
                компанией JetBrains. Также компилируется в JavaScript и в исполняемый код ряда платформ через инфраструктуру LLVM.`
        ]
    },
    {
        img: "",
        title: "Javascript",
        subtitle: [],
        description: [
            `JavaScript — кроссплатформенный, динамически типизированный язык программирования, который используется в основном для создания интерактивного контента веб-страниц, таких
                как анимация, формы и слайдеры.`
        ]
    }
];

export default structures;