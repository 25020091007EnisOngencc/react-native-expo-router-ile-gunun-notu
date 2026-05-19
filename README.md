
# 📱 React Native & Expo ile Günün Notu Uygulaması (Cross-Platform)

Bu proje, daha önce yerel (Native) Android mimarisi (Java/Kotlin) kullanılarak geliştirilen **"Günün Notu"** mobil uygulamasının, **React Native** ve **Expo Router** teknolojileri kullanılarak çapraz platform (Cross-Platform) mimarisine taşınmış versiyonudur. 

Bu sayede proje, herhangi bir macOS cihaz kısıtlamasına takılmadan tek bir kod tabanı üzerinden hem **Android** hem de **iOS** cihazlarda tamamen uyumlu bir şekilde çalışabilmektedir.


<img width="2559" height="1599" alt="Ekran görüntüsü 2026-05-19 180235" src="https://github.com/user-attachments/assets/d23a1e7a-2ab0-43cb-8099-35646672cc31" />

---

<img width="2559" height="1599" alt="Ekran görüntüsü 2026-05-19 180346" src="https://github.com/user-attachments/assets/9c9c2fae-5f56-42cb-9ee8-cbc78c7e518b" />


---

## 🎯 Projenin Amacı & Hocanın Ödev Gereksinimleri

Proje, mobil geliştirmede platform bağımsızlığı ve sayfalar arası veri iletim (Intent & Routing) mantığını anlamak üzere geliştirilmiştir.
* macOS işletim sistemi ve Xcode simülatörü olmayan ortamlarda (Windows üzerinde) **iOS uyumlu** geliştirme yapabilmek için **Expo Go** altyapısı tercih edilmiştir.
* Android Studio'daki `Intent` ve `getIntent().getStringExtra()` ile yapılan sayfalar arası veri taşıma mantığı, bu projede Expo Router'ın modern `useLocalSearchParams` ve `router.replace` dinamik yönlendirme mimarisiyle simüle edilmiştir.

---

## 🛠️ Kullanılan Teknolojiler

* **Framework:** React Native (Expo SDK)
* **Yönlendirici (Routing):** Expo Router (Stack Navigation)
* **Dil:** TypeScript / JavaScript
* **Test Ortamı:** Android Virtual Device (AVD) & Expo Go Client

---

## 📂 Proje Klasör Yapısı

Expo Router'ın dosya tabanlı yönlendirme (file-based routing) sistemine uygun olarak geliştirilen kritik dosyalar `src/app/` dizini altında yer almaktadır:

* 📄 **`_layout.tsx`**: Uygulamanın ana iskeletini ve sayfa yığınını (`Stack Navigation`) yönetir. Alt sekmelerin bağımsız sayfaları engellememesi için esnek Stack yapısına dönüştürülmüştür.
* 📄 **`index.tsx`**: Uygulamanın ana ekranıdır. İkinci ekrandan gönderilen güncel not verisini anlık olarak yakalar ve modern bir karanlık tema arayüzünde görüntüler.
* 📄 **`notEkle.tsx`**: Kullanıcının yeni not girdisi yapabileceği text alanını barındıran ve girilen veriyi ana sayfaya güvenli bir şekilde geri fırlatan ikinci ekrandır.

---

## 🚀 Yerel Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda test etmek isterseniz:

1. Projeyi klonlayın:
   ```bash
   git clone [https://github.com/25020091007EnisOngencec/REACT-NATIVE-EXPO-ILE-GUNUN-NOTU.git](https://github.com/25020091007EnisOngencec/REACT-NATIVE-EXPO-ILE-GUNUN-NOTU.git)
