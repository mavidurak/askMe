Mavidurak-IO Uygulama Atölyesi
===========================


Bu döküman Mavidurak-IO bünyesinde gerçekleştirilecek olan **Uygulama Atölyesi**'nde kullanılacaktır.  

----------


Uygulama Yapısı
------------------------

Uygulama son derece basit bir soru cevap uygulaması olacaktır. 

> **Kullanıcı Hikayeleri:**

> - Ana sayfada kullanıcıların sorduğu sorular listelenecek.
> - Kayıt olma ekranından kullanıcılar kayıt olabilecek.
> - Kayıt olan kullanıcılar oturum açabilecek. 
> - Oturum açmış kullanıcılar oturumlarını kapatabilecek.
> - Oturum açmış kullanıcılar yeni soru ekleyebilecek.
> - Soru başlıklarına tıklandığında soru detayları ve cevaplar listelenecek. 
> - Soru detayında soruya bir cevap yazılabilecek. 

Teknolojiler 
------------------------

#### <i class="icon-cog"></i> Framework

Tüm uygulama back-end'i **Node.JS** üzerine inşaa edilecektir. Bir node.js framework'ü olan **Express.js** altyapı olarak kullanıcılaktır. 

#### <i class="icon-folder-open"></i> Front-End

Tasarımlar **Twitter Bootstrap** kütüphanesi kullanılarak geliştirilecektir. Bu kütüphanenin yanı sıra, **Gulp** ve **Bower** teknolojilerinden de yararlanılacaktır. 

#### <i class="icon-pencil"></i> Veritabanı

Veritabanı olarak **MySQL** kullanılacaktır. 

#### <i class="icon-trash"></i> Veritabanı Modelleri

Veritabanı modelleri için **Sails.js**'de de aktif olarak kullanılan **Waterline** kullanılacaktır. Express ve Waterline entegrasyonu için bu [gist](https://gist.github.com/particlebanana/8441398) üzerinden yararlanılabilir. 

> **Uyarı:** Waterline kullanımında bazı sails.js paketleri de gerekebilir. İlgili dökümanda bunlardan da bahsedilmiş. Buna dikkat edilmesi gerekmektedir.


----------


İş Adımları
-------------------

Bu bölümde iş adımları sıralanmıştır. 

> **Uyarı:**

> Bazı iş adımları aynı anda yürütülebilecek, bazı iş adımları birbirleri ile bağlantılıdır. 

#### <i class="icon-refresh"></i> App.js Yapılandırılması

**App.js** dosyası projenin çekirdek dosyasıdır ve bu nedenle içeriği minimuma indirilecektir. Aynı işi yapan tüm kodlar ayrı ayrı dosyalarda toplanacaktır. App.js sadece işleri yapan dosyaları tek tek çağıracaktır. **App.js uygulamayı ayağa kaldırmayacak, uygulamayı ayağa adım adım kaldırtacaktır.**

#### <i class="icon-refresh"></i> Modeller

Veritabanı modelleri **models** klasörü altında tanımlanacaktır. Aşağıdaki tabloların modelleri oluşturulacaktır;

* Users
* Questions
* Answers

#### <i class="icon-refresh"></i> Rotalar

Rota tanımlamaları yapılacak ve **app.js** içerisinden entegre edilecektir. Aşağıdaki rota tanımlamaları yapılacaktır;

* GET "/" : Anasayfa ve soruların listelendiği ekran.
* GET "/login": Login ekranı.
* POST "/login": Login olma işlemi.
* GET "/signup": Kayıt olma ekranı.
* POST "/signup": Kayıt olma işlemi.
* GET "/logout": Oturumu kapatma işlemi.
* GET "/question/add": Yeni soru ekleme ekranı.
* POST "/question/add": Yeni soru ekleme işlemi.
* GET "/question/{id}": Seçilen sorunun detaylarının gösterilmesi ekranı.
* POSt "/question/{id}/add_answer": Seçilen soruya yeni cevap ekleme işlemi.

#### <i class="icon-refresh"></i> Klasör Yapısı

Belirli bir klasör yapısı üzerinde çalışmak işlerimizi organize etmek açısından yararlı olacaktır. Bu nedenle aşağıdaki klasör yapısının dışına çıkılmayacaktır. 

* app 
 * config (Yapılandırma dosyaları)
 * models (Veritabanı modelleri)
 * routes (Rota tanımlamaları)
 * views (Görünüm dosyaları)
* bower_components (Front-End komponentleri)
* core (App.js parçaları)
* node_modules
* public (Asset dizini)

#### <i class="icon-refresh"></i> Görünümler

Görünümlerde şablon yapısı kullanılacaktır. Bunun için `express-ejs-layouts` kütüphanesinden yararlanılarak tüm görünümler `ejs` template engine'e uygun olarak hazırlanacaktır. 

Tüm assetler **bower** ile kurulacak, **gulp** ile birleştirilerek tek bir **css** ve **js** dosyası olarak projeye entegre edilecektir.  

#### <i class="icon-refresh"></i> İş Katmanı

İş yapan rotalarda işlemlerin yapılıp sonuçların geriye gönderilmesi ya da ilgili yönlendirmelerin yapılması işlemidir. Yukarıdaki adımlar tamamlandıktan sonra iş katmanı yazılacaktır. Aşağıdaki işler gerçeklenecektir;

* Kayıt olma işlemi.
* Login olma işlemi.
* Oturum kapatma işlemi.
* Yeni soru kaydetme işlemi.
* Soruların listelenmesi işlemi.
* Soru detayının gösterilmesi işlemi.
* Yeni cevap kaydetme işlemi.
* Cevapların soru detayında gösterilmesi işlemi.
