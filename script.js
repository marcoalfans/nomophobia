const questionsIndo = [
  "Saya akan merasa tidak nyaman jika tidak mengakses langsung informasi dari telepon pintar saya.",
  "Saya akan merasa terganggu jika saya tidak dapat melihat informasi dari telepon pintar saat saya sedang ingin melakukannya.",
  "Tidak dapat melihat berita (misalnya kejadian saat ini, cuaca, dsb) dari telepon pintar saya akan membuat saya resah.",
  "Saya akan merasa terganggu jika saya tidak dapat menggunakan telepon pintar saya dan/atau telepon pintar saya itu tidak ada saat saya membutuhkannya.",
  "Saya akan sangat takut bila telepon pintar saya kehabisan baterai.",
  "Saya akan panik jika pulsa atau paket data limit bulanan saya habis.",
  "Jika tidak ada sinyal data atau tidak dapat terhubung dengan Wi-Fi, maka saya akan terus memeriksa apakah sinyal atau jaringan Wi-Fi sudah ada.",
  "Jika saya tidak dapat menggunakan telepon pintar saya, maka saya akan merasa seperti terdampar di tempat asing.",
  "Jika saya tidak dapat cek telepon pintar sementara waktu, maka saya akan merasa sangat ingin mengeceknya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa cemas karena tidak dapat langsung berkomunikasi dengan keluarga dan/atau teman-teman saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa khawatir karena keluarga saya dan/atau teman-teman tidak dapat menghubungi saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa resah karena saya tidak dapat menerima pesan dan telepon.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa cemas karena tidak dapat berhubungan dengan keluarga dan/atau teman-teman saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa resah karena saya tidak akan tahu apakah ada seseorang yang telah mencoba menelpon saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya merasa cemas hubungan saya dengan keluarga dan/atau teman-teman saya akan rusak.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa resah karena terputus dari identitas online saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya merasa tidak nyaman karena tidak dapat update status sosial dan jaringan online.",
  "Jika saya tidak membawa telepon pintar saya, maka saya merasa janggal karena tidak dapat cek notifikasi update dari koneksi dan jaringan online.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa aneh karena tidak tahu apa yang harus dilakukan.",
];

const questionsEnglish = [
  "I would feel uncomfortable if I could not directly access information from my smartphone.",
  "I would feel disturbed if I could not check information from my smartphone when I wanted to.",
  "Not being able to see news (e.g., current events, weather, etc.) from my smartphone would make me anxious.",
  "I would feel disturbed if I could not use my smartphone and/or my smartphone was not available when I needed it.",
  "I would be very afraid if my smartphone's battery ran out.",
  "I would panic if my monthly credit or data package ran out.",
  "If there is no data signal or I cannot connect to Wi-Fi, I will keep checking whether the signal or Wi-Fi network is available.",
  "If I cannot use my smartphone, I would feel like I was stranded in a foreign place.",
  "If I cannot check my smartphone for a while, I will feel a strong urge to check it.",
  "If I do not bring my smartphone, I will feel anxious because I cannot communicate directly with my family and/or friends.",
  "If I do not bring my smartphone, I will feel worried because my family and/or friends cannot contact me.",
  "If I do not bring my smartphone, I will feel anxious because I cannot receive messages and calls.",
  "If I do not bring my smartphone, I will feel anxious because I cannot connect with my family and/or friends.",
  "If I do not bring my smartphone, I will feel anxious because I will not know if someone has tried to call me.",
  "If I do not bring my smartphone, I feel anxious that my relationships with my family and/or friends will be damaged.",
  "If I do not bring my smartphone, I will feel uneasy because I am disconnected from my online identity.",
  "If I do not bring my smartphone, I feel uncomfortable because I cannot update my social status and online network.",
  "If I do not bring my smartphone, I will feel strange because I cannot check notifications from my connections and online network.",
  "If I do not bring my smartphone, I will feel odd because I do not know what to do.",
];

const form = document.getElementById("nmpqForm");
const resultContainer = document.getElementById("result");
const questionContainer = document.getElementById("questions");
const namePage = document.getElementById("namePage");
const languagePage = document.getElementById("languagePage");
const questionnairePage = document.getElementById("questionnairePage");

const userNameInput = document.getElementById("userName");
const submitNameBtn = document.getElementById("submitName");

let questions = [];
let language = "id"; // Default to Indonesian

// Langkah 1: Masukkan Nama
submitNameBtn.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    namePage.style.display = "none";
    languagePage.style.display = "block";
  } else {
    alert("Silahkan masukkan nama Anda.");
  }
});

// Langkah 2: Pilih Bahasa
document.getElementById("indonesia").addEventListener("click", () => {
  language = "id";
  displayQuestionnaire();
});

document.getElementById("english").addEventListener("click", () => {
  language = "en";
  displayQuestionnaire();
});

// Langkah 3: Tampilkan Kuesioner
function displayQuestionnaire() {
  languagePage.style.display = "none";
  questionnairePage.style.display = "block";

  if (language === "id") {
    questions = questionsIndo;
    document.getElementById("questionnaireTitle").innerText =
      "Kuesioner Nomophobia (NMP-Q)";
    document.getElementById("instructionText").innerText =
      "Silakan mengindikasikan seberapa besar Anda setuju atau tidak setuju dengan pernyataan di bawah ini yang berhubungan dengan telepon pintar Anda.";
    document.getElementById("scaleText").innerHTML = `
            <li><strong>1</strong> - Sangat tidak setuju</li>
            <li><strong>2</strong> - Tidak setuju</li>
            <li><strong>3</strong> - Sedikit tidak setuju</li>
            <li><strong>4</strong> - Netral</li>
            <li><strong>5</strong> - Sedikit setuju</li>
            <li><strong>6</strong> - Setuju</li>
            <li><strong>7</strong> - Sangat setuju</li>
        `;
  } else {
    questions = questionsEnglish;
    document.getElementById("questionnaireTitle").innerText =
      "Nomophobia Questionnaire (NMP-Q)";
    document.getElementById("instructionText").innerText =
      "Please indicate to what extent you agree or disagree with the following statements related to your smartphone.";
    document.getElementById("scaleText").innerHTML = `
            <li><strong>1</strong> - Strongly disagree</li>
            <li><strong>2</strong> - Disagree</li>
            <li><strong>3</strong> - Slightly disagree</li>
            <li><strong>4</strong> - Neutral</li>
            <li><strong>5</strong> - Slightly agree</li>
            <li><strong>6</strong> - Agree</li>
            <li><strong>7</strong> - Strongly agree</li>
        `;
  }

  displayQuestions();
}

// Fungsi untuk menampilkan pertanyaan
function displayQuestions() {
  questionContainer.innerHTML = ""; // Bersihkan pertanyaan sebelumnya
  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
            <p>${index + 1}. ${question}</p>
            <div class="options">
                ${[1, 2, 3, 4, 5, 6, 7]
                  .map(
                    (num) => `
                    <label class="radio-option">
                        <input type="radio" name="q${index}" value="${num}">
                        ${num}
                    </label>
                `
                  )
                  .join("")}
            </div>
        `;
    questionContainer.appendChild(questionDiv);
  });
}

const questionsContainer = document.getElementById("questions");

// Membuat pertanyaan dan opsi jawaban
questions.forEach((question, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";

  const questionText = document.createElement("p");
  questionText.textContent = `${index + 1}. ${question}`;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  for (let i = 1; i <= 7; i++) {
    const radioOption = document.createElement("div");
    radioOption.className = "radio-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = i;
    input.id = `q${index}o${i}`;

    const label = document.createElement("label");
    label.htmlFor = `q${index}o${i}`;
    label.textContent = i;

    radioOption.appendChild(input);
    radioOption.appendChild(label);
    optionsDiv.appendChild(radioOption);
  }

  questionDiv.appendChild(questionText);
  questionDiv.appendChild(optionsDiv);
  questionsContainer.appendChild(questionDiv);
});

// Handle form submission
document.getElementById("nmpqForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Check if all questions are answered
  const unanswered = questions.findIndex(
    (_, index) => !document.querySelector(`input[name="q${index}"]:checked`)
  );

  if (unanswered !== -1) {
    alert(`Mohon jawab pertanyaan nomor ${unanswered + 1}`);
    return;
  }

  // Calculate total score
  const totalScore = questions.reduce((sum, _, index) => {
    const selectedValue = parseInt(
      document.querySelector(`input[name="q${index}"]:checked`).value
    );
    return sum + selectedValue;
  }, 0);

  // Get interpretation based on score
  const interpretation = getInterpretation(totalScore);

  // Display result
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
                <h2 class="result-heading">Hasil Penilaian</h2>
                <div class="result-score">Skor Total: ${totalScore}</div>
                <div class="result-interpretation">
                    <strong>${interpretation.title}</strong>
                    <p>${interpretation.description}</p>
                </div>
            `;
});

function getInterpretation(score) {
  if (score <= 20) {
    return {
      title: "Tidak ada nomophobia",
      description:
        "Anda memiliki hubungan yang sehat dengan ponsel Anda dan tidak ada masalah ketika terpisah darinya.",
    };
  } else if (score <= 60) {
    return {
      title: "Nomophobia ringan",
      description:
        "Anda sedikit gelisah ketika Anda lupa telepon di rumah selama sehari atau terjebak di suatu tempat yang tidak ada WiFinya, tetapi kecemasannya tidak terlalu berlebihan.",
    };
  } else if (score <= 100) {
    return {
      title: "Nomophobia sedang",
      description:
        "Anda cukup melekat pada ponsel Anda. Anda sering memeriksa update ponsel Anda, saat berjalan di jalan atau berbicara dengan teman, dan Anda sering merasa khawatir ketika ponsel Anda tidak terhubung.",
    };
  } else {
    return {
      title: "Nomophobia berat",
      description:
        "Mata dan pikiran Anda hampir tidak bisa jauh lebih dari 60 detik tanpa memeriksa ponsel Anda. Memeriksa ponsel menjadi kegiatan awal pada pagi hari dan yang terakhir di malam hari, dan mendominasi aktivitas Anda sepanjang hari.",
    };
  }
}
