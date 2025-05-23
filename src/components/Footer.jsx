import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <img src="logo.png" alt="logo" className={styles.logo} />
        <div className={styles.buttons}>
          <div className={styles.buttonGroup}>
            <p>Хамтран ажиллах хүсэлт илгээх</p>
            <a href="#">Контент нийтлүүлэх ➔</a>
          </div>
          <div className={styles.buttonGroup}>
            <p>Хамтран ажиллах хүсэлт илгээх</p>
            <a href="#">Эвент дээр хамтрах ➔</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.links}>
          <a href="#">Редакцын бодлого</a>
          <a href="#">Блог</a>
          <a href="#">Ажлын байр</a>
          <a href="#">Холбогдох</a>
        </div>
        <div className={styles.columns}>
          <div>
            <h4>Булангууд</h4>
            <ul>
              <li>Онцлох бизнес</li>
              <li>Techworm</li>
              <li>Би хэрхэн ажилладаг вэ?</li>
              <li>Мэдүүштэй</li>
              <li>Чөлөөт</li>
              <li>Номын тухай</li>
              <li>7 хоногийн тойм</li>
              <li>Өртөөлөгчид</li>
            </ul>
          </div>
          <div>
            <h4>&nbsp;</h4>
            <ul>
              <li>Тогтвортой хөгжил</li>
              <li>Тайлбарлах нь</li>
              <li>10 ертөнц, 10 өнцөг</li>
              <li>Төстэй оффис</li>
              <li>Зочинтой булан</li>
              <li>8 минутын улс төр</li>
              <li>Сонин</li>
              <li>English</li>
            </ul>
          </div>
          <div>
            <h4>Компани</h4>
            <p>Улаанбаатар 14240<br />
              СБД, 8-р хороо, Амарын гудамж,<br />
              Тэнгэрлиг медиа групп<br />
              +976 9973 1632</p>
            <p>Зочлох: <a href="https://unread.media" target="_blank">www.unread.media</a></p>
          </div>
        </div>
        <p className={styles.copy}>© 2015-2025 Анрид Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
      </div>
    </footer>
  );
}

export default Footer;