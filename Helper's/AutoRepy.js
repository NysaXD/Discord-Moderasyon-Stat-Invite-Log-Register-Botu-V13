const Emoji = require("../Helper's/Settings.json")
const sunucuVeri = require("./MongooseSchema/_setup")
const Server = sunucuVeri.findOne({ guildID: client.guilds.cache.get(Emoji.guildID) })

module.exports = {
    
"YetersizYetki": `${Emoji.Warning} \`Yetersiz Yetki\` Bu komutu kullanmak için yeterli yetkiye sahip değilsin.`,
"UyeBelirt": `${Emoji.Warning} \`Üye Belirt\` Geçerli bir kullanıcı belirt ve tekrar dene.`,
"VmuteActive": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcı ses kanallarında zaten susturulmuş.`,
"VmuteDisable": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcı ses kanallarında zaten susturulmamış.`,
"CmuteActive": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcı metin kanallarında zaten susturulmuş.`,
"CmuteDisable": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcı metin kanallarında zaten susturulmamış.`,
"JailActive": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcı zaten cezalıda.`,
"JailDisable": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcı metin cezalıda değil.`,
"ZamanBelirt": `${Emoji.Warning} \`Zaman Belirtilmedi\` Geçerli bir zaman belirt ve tekrar dene.`,
"BotSahibi": `${Emoji.Warning} \`Hatalı İşlem\` Bot Sahibini Muteleyemezsin.`,
"Self": `${Emoji.Warning} \`Hatalı İşlem\` Kendine ceza-i işlem uygulayamazsın.`,
"Botİslem": `${Emoji.Warning} \`Hatalı İşlem\` Botlara ceza-i işlem uygulayamazsın.`,
"YetkimYok": `${Emoji.Warning} \`Hatalı İşlem\` Belirttiğin kullanıcıya işlem uygulamak için yeterli yetkiye sahip değilim.`,
"SebebBelirt": `${Emoji.Warning} \`Sebeb Belirtilmedi.\` Bir sebep belirt ve tekrar dene.`,
"SayıBelirt": `${Emoji.Warning} \`Sayı Belirtilmedi.\` Bir sayı belirt ve tekrar dene.`,
"CezaNoYok": `${Emoji.Warning} \`Veri Bulunamadı.\` Belirttiğin ceza numarasına ait veri bulunamadı.`,
"İsimBelirt": `${Emoji.Warning} \`İsim Belirtilmedi.\` Geçerli bir isim belirt ve tekrar dene.`,
"YasBelirt": `${Emoji.Warning} \`Veri Bulunamadı.\` Geçerli bir yaş belirt ve tekrar dene.`,
"KayıtlıUser": `${Emoji.Warning} \`Zaten Kayıtlı.\` Belirttiğin kullanıcı sunucuda zaten kayıtlı.`,
"CezapuanYüksek": `${Emoji.Warning} \`Cezapuan Sınırı.\` Belirttiğin kullanıcının toplam \`${Emoji.KayıtCezaPuan}\` cezapuanı olduğu için kayıt işlemi iptal edildi.`,
"İsimVerisiYok": `${Emoji.Warning} \`Veri Yok.\` Belirttiğin kullanıcının isim geçmişi yok.`,
"KayıtsızUser": `${Emoji.Warning} \`Zaten Kayıtsızda.\` Belirttiğin kullanıcı zaten kayıtsızda.`,
"İslemBelirtyTag": `${Emoji.Warning} \`Hatalı İşlem.\` Geçerli bir işlem belirt. (\`.yasaklıtag ekle/çıkar/liste\`)`,
"YasaklıTagBelirt": `${Emoji.Warning} \`Hatalı İşlem.\` Geçerli bir tag belirt.`,
"TagZatenVar": `${Emoji.Warning} \`Hatalı İşlem.\` Belirttiğin tag listede bulunmakta.`,
"banLimit": `${Emoji.Warning} \`Ban Limit.\` Bir saat içerisinde \`${Emoji.banLimit}\` kişiye ban atabilirsin ban sınırını aştın.`,
"voiceMuteLimit": `${Emoji.Warning} \`Voice-Mute Limit.\` Bir saat içerisinde \`${Emoji.voiceMuteLimit}\` kişiye voice-mute atabilirsin voice-mute sınırını aştın.`,
"chatMuteLimit": `${Emoji.Warning} \`Chat-Mute Limit.\` Bir saat içerisinde \`${Emoji.chatMuteLimit}\` kişiye chat-mute atabilirsin chat-mute sınırını aştın.`,
"jailLimit": `${Emoji.Warning} \`Jail Limit.\` Bir saat içerisinde \`${Emoji.jailLimit}\` kişiye jail atabilirsin jail sınırını aştın.`,
"EksikArguman": `${Emoji.Warning} \`Eksik Bilgi.\` Lütfen tüm argümanları doğru giriniz. Örnek \`.vip @Wex/728161454288535604\`.`,
"TaglıAlım": `${Emoji.Warning} \`Taglı Alım.\` Sunucumuz şuanda taglı alımda ve belirttiğin kullanıcının isminde tagımız yok.`,
"BoosterİsimBelirt": `${Emoji.Warning} \`İsim Belirt.\` Lütfen geçerli bir isim belirt ve tekrar dene.`,
"boosterLimit": `${Emoji.Warning} \`Komut Limit.\` 15 Dakika içerisinde **${Emoji.boosterLimit}** kere isim değiştirebilirsin.`,
"mbLimit": `${Emoji.Warning} \`Booster Limit.\` 15 Dakika içerisinde **${Emoji.mbLimit}** kere \`${Emoji.Prefix}mb\` komutunu kullanabilirsin.`,
"sesKanalındaOlmanGerek": `${Emoji.Warning} \`Hatalı İşlem.\` Birini olduğun ses kanalına çekmen için bir ses kanalına bağlı olman gerekli`,
"BirÜyeBelirtÇek": `${Emoji.Warning} \`Hatalı İşlem.\` Olduğun kanala çekmek için bir kullanıcı belirt.`,
"BotuCekemezsin": `${Emoji.Warning} \`Hatalı İşlem.\` Bir botu yanına çekemezsin.`,
"KendiniÇekemezsin": `${Emoji.Warning} \`Hatalı İşlem.\` Kendinle aynı kanaldasın zaten.`,
"AynıKanaldasınız": `${Emoji.Warning} \`Hatalı İşlem.\` Belirttiğin kullanıcı ile aynı kanaldasın zaten.`,
"kullanıcıSesKanalındaDeğil": `${Emoji.Warning} \`Hatalı İşlem.\` Belirttiğin kullanıcı herhangi bir ses kanalına bağlı değil.`,
"SesKanalındaDeğilsinİzinGit": `${Emoji.Warning} \`Hatalı İşlem.\` Birinin yanına gitmek için önce ses kanalına bağlı olman gerek.`,
"İzinliGitKullanıcıBelirt": `${Emoji.Warning} \`Hatalı İşlem.\` Yanına gitmek istediğin kullanıcıyı belirt.`,
"sesKanalındaOlmanGerekİgit": `${Emoji.Warning} \`Hatalı İşlem.\` Birini olduğun ses kanalına gitmen için bir ses kanalına bağlı olman gerekli`,
"BirÜyeBelirtgit": `${Emoji.Warning} \`Hatalı İşlem.\` Yanına gitmek istediğin kullanıcıyı belirt.`,
"botunYanınaGidemezsin": `${Emoji.Warning} \`Hatalı İşlem.\` Bir botun yanına gidemezsin.`,
"VerinYok": `${Emoji.Warning} \`Veri Yok.\` Databasede senin adına kayıtlı veriye ulaşamadım.`,
"yetVerTagsız": `${Emoji.Warning} \`Tagsız Kullanıcı.\` Yetkiye başlatmaya çalıştığın kullanıcının isminde sunucu tagımız yok.`,
"RolBelirt": `${Emoji.Warning} \`Rol Belirtilmedi.\` Bir Rol Belirt ve Tekrar dene.`,
"TagBelirt": `${Emoji.Warning} \`Tagsız Kullanıcı.\` Bir Tag Belirt ve Tekrar dene.`,
"taglıTagsız": `${Emoji.Warning} \`Tagsız Kullanıcı.\` Taglı olarak kaydetmeye çalıştığın kullanıcının isminde tagımız yok.`,
"YetkindenYüksekRol": `${Emoji.Warning} \`Hatalı İşlem.\` Yetkinden daha yüksek bir rolü kendine veremezsin.`,
"kullanıcıdaRolMevcuk": `${Emoji.Warning} \`Zaten Bulunmakta.\` Vermek istediğin rol belirttiğin kullanıcıda zaten mevcut.`,
"yasaklıRol": `${Emoji.Warning} \`Yasaklı Rol.\` Belirttiğin rol yasaklı roller listesinde bu rolü veremezsin/alamazsın.`,
"SilSayı": `${Emoji.Warning} \`Sayı Belirtilmedi.\` Sileceğin miktarı belirt.`,
"Mesayok": `${Emoji.Warning} \`Mesaj Yok.\` Kanalda silinmiş bir mesaj bulunamadı.`,
"voicekickLimit": `${Emoji.Warning} \`Bağlantı Kes Limit.\` Bir saat içerisinde \`${Emoji.voicekickLimit}\` kişinin bağlantısını kesebilirsin ve sen limiti aştın.`,
"seskanalındadegilKes": `${Emoji.Warning} \`Ses Kanalında Değil.\` Bağlantısını kesmek istediğiniz kullanıcı sesli odalarda bulunmuyor..`,
"enAz1SesOlmalı": `${Emoji.Warning} \`Hatalı İşlem.\` Bu komut ses kanalında en az 1 kişi olmalı.`,
"birIDbelirt": `${Emoji.Warning} \`Hatalı İşlem.\` Geçerli bir kullanıcı id'si belirt ve tekrar dene.`,
"ArgumanBelirt": `${Emoji.Warning} \`Hatalı İşlem.\` Bir Arguman Belirt. [\`${Emoji.Prefix}r <ver,al,yasaklırol>\`]`,
"SüpheliDegil": `${Emoji.Warning} \`Hatalı İşlem.\` Belirttiğin kullanıcı süphelide değil.`,
"MiktarBelirt": `${Emoji.Warning} \`Hatalı İşlem.\` Geçerli bir sayı, miktar belirt.`,
"DataBulunmadıInvıte": `${Emoji.Warning} \`Hatalı İşlem.\` Belirttiğin kullanıcının davet verisi bulunamadı.`,
"kisiBulunamadıInvıte": `${Emoji.Warning} \`Hatalı İşlem.\` Belirttiğin kullanıcıyı davet eden şahsı bulamadım.`,

}
