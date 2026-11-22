const forms={
PTMC:{title:'甲狀腺微小乳突癌（PTMC）',sub:'主動監測、手術，還是熱消融？',intro:'適用於經醫療團隊評估為低風險 PTMC 的成人。先由醫療團隊確認病灶數量、大小、分布、與重要構造關係，以及放射線暴露、家族史與遺傳風險，再進入主動監測、手術或熱消融的共同決策。一般診斷用 X 光或 CT 不等同於童年／青少年頭頸部治療性放射線暴露。',qs:[
['record_id','個案編號','text','',1],['visit_date','填寫日期','date','',1],['diagnosis_date','初次診斷日期','date','',0],['tumor_count','甲狀腺癌病灶數量','radio','1顆|2顆|≥3顆|不確定',1],['distribution','病灶分布','radio','單側|雙側|不確定',0],['primary_location','主要病灶位置','radio','右葉|左葉|峽部|不確定',0],['tumor_size_mm','最大病灶最大徑（mm）','number','',0],['other_tumor_sizes','其他病灶大小（mm，以逗號分隔）','text','',0],['all_le10mm','已知病灶是否皆 ≤10 mm','radio','是|否|不確定',0],['trachea_relation','病灶是否接近／貼近氣管','radio','是|否|不確定',0],['rln_relation','病灶是否接近喉返神經可能走行區域','radio','是|否|不確定',0],['ete_suspected','是否疑似甲狀腺外侵犯（ETE）','radio','是|否|不確定',0],['ln_suspected','是否疑似頸部淋巴結轉移','radio','是|否|不確定',0],['cytology','細胞學／病理結果','text','',0],['molecular','分子檢測（如 BRAF；若有）','text','',0],['radiation_history','童年／青少年曾接受頭頸部治療性放射線暴露','radio','有|無|不確定',0],['family_history_1st','一等親是否有甲狀腺癌病史','radio','有|無|不確定',0],['family_affected_count','家族中已知甲狀腺癌受影響人數','number','',0],['hereditary_syndrome','已知遺傳性甲狀腺癌相關症候群／家族病史','radio','有|無|不確定',0],['hereditary_detail','若有，請註明症候群／家族病史','text','',0],['risk_confirmed','經醫療團隊整體評估是否屬低風險 PTMC','radio','是|否|尚未確定',1],['eligibility_review','醫療端適用性複核狀態','radio','待醫師複核|已由醫師複核|需補充檢查',0],['avoid_surgery','避免接受手術對我有多重要？','radio','0|1|2|3|4|5',0],['remove_tumor','希望現在就處理腫瘤對我有多重要？','radio','0|1|2|3|4|5',0],['cosmesis','外觀／疤痕對我有多重要？','radio','0|1|2|3|4|5',0],['k1','低風險 PTMC 在適當條件下可以選擇主動監測。','radio','對|錯|不確定',0],['k2','主動監測仍需要規律超音波追蹤。','radio','對|錯|不確定',0],['decision','我目前比較傾向','radio','主動監測|手術|熱消融|尚未決定',1],['confidence','我對目前決定的信心（0–10）','radio','0|1|2|3|4|5|6|7|8|9|10',0],['questions','我最想詢問醫療團隊的問題','textarea','',0]]},
PHPT:{title:'原發性副甲狀腺機能亢進（PHPT）',sub:'手術、藥物，還是持續追蹤？',intro:'先確認血鈣－PTH 生化型態，再討論治療。影像主要用於定位，不是單獨用來診斷 PHPT 或決定是否手術。',qs:[
['record_id','個案編號','text','',1],['visit_date','填寫日期','date','',1],['calcium','總血鈣 Ca（mg/dL）','number','',0],['albumin','Albumin（g/dL）','number','',0],['ionized_ca','游離鈣 Ionized Ca','number','',0],['pth','PTH（pg/mL）','number','',0],['egfr','eGFR（mL/min/1.73m²）','number','',0],['vitd','25-OH Vitamin D（ng/mL）','number','',0],['urine_ca','24 小時尿鈣（mg/day）','number','',0],['biochem_type','經評估目前較符合的生化型態','radio','高血鈣＋PTH高|高血鈣＋PTH不適當正常|正常血鈣＋PTH高／NPHPT|續發性HPT可能|其他高血鈣原因|尚未確定',1],['stone','腎結石／腎鈣化','radio','有|無|不確定',0],['bone','骨質疏鬆／脆弱性骨折','radio','有|無|不確定',0],['cure','希望有機會治癒疾病對我有多重要？','radio','0|1|2|3|4|5',0],['avoid_surgery','避免手術對我有多重要？','radio','0|1|2|3|4|5',0],['k1','血鈣高時，PTH 在正常範圍就一定可以排除 PHPT。','radio','對|錯|不確定',0],['k2','正常血鈣＋PTH 高，需要先排除維生素 D 不足、腎功能下降等續發原因。','radio','對|錯|不確定',0],['k3','影像陰性即可排除 PHPT。','radio','對|錯|不確定',0],['decision','我目前比較傾向','radio','副甲狀腺手術|藥物治療|持續追蹤|先完成診斷檢查|尚未決定',1],['confidence','我對目前決定的信心（0–10）','radio','0|1|2|3|4|5|6|7|8|9|10',0],['questions','我最想詢問醫療團隊的問題','textarea','',0]]},
SHPT:{title:'續發性副甲狀腺機能亢進（SHPT）',sub:'持續追蹤、藥物治療，還是手術？',intro:'SHPT 治療不能只看一次 PTH；需要一起考量腎臟治療狀況、PTH 趨勢、鈣磷、症狀、藥物效果與副甲狀腺增生程度。',qs:[
['record_id','個案編號','text','',1],['visit_date','填寫日期','date','',1],['renal_status','目前腎臟治療狀況','radio','CKD未透析|血液透析|腹膜透析|腎移植後',1],['dialysis_years','透析年數','number','',0],['pth','PTH（pg/mL）','number','',0],['calcium','血鈣 Ca（mg/dL）','number','',0],['phosphorus','血磷 P（mg/dL）','number','',0],['alp','ALP（U/L）','number','',0],['symptoms','目前相關問題（可複選）','checkbox','骨/關節痛|肌肉無力|搔癢|骨折/骨質問題|血管/軟組織鈣化|高鈣/高磷難控制|無明顯症狀',0],['lower_pth','希望盡快降低 PTH 對我有多重要？','radio','0|1|2|3|4|5',0],['reduce_meds','減少長期服藥負擔對我有多重要？','radio','0|1|2|3|4|5',0],['avoid_surgery','避免手術對我有多重要？','radio','0|1|2|3|4|5',0],['k1','PTH 很高時，每一位病人都一定要立刻手術。','radio','對|錯|不確定',0],['k2','即使選擇追蹤，仍需要規律檢查 Ca／P／PTH。','radio','對|錯|不確定',0],['k3','嚴重 SHPT 手術後可能發生低血鈣／飢餓骨症候群。','radio','對|錯|不確定',0],['decision','我目前比較傾向','radio','持續追蹤|藥物治療／調整|副甲狀腺手術評估|尚未決定',1],['confidence','我對目前決定的信心（0–10）','radio','0|1|2|3|4|5|6|7|8|9|10',0],['questions','我最想詢問醫療團隊的問題','textarea','',0]]}};
function eligibility(o){
const flags=[]; const add=(v,msg)=>{if(v)flags.push(msg)};
const n=Number(o.tumor_size_mm);
add(!o.tumor_size_mm||!Number.isFinite(n),'最大徑未確認');
add(n>10,'最大病灶超過 10 mm，需重新確認是否屬 PTMC');
add(o.all_le10mm==='否','有其他病灶超過 10 mm');
add(o.ete_suspected==='是','疑似甲狀腺外侵犯（ETE）');
add(o.ln_suspected==='是','疑似頸部淋巴結轉移');
add(o.trachea_relation==='是'||o.rln_relation==='是','靠近氣管或喉返神經相關危險區');
add(o.distribution==='雙側'||o.tumor_count==='2顆'||o.tumor_count==='≥3顆','多發或雙側病灶，需逐一確認位置及範圍');
add(o.radiation_history==='有','童年／青少年治療性放射線暴露史');
add(o.family_history_1st==='有'||o.hereditary_syndrome==='有','家族史或遺傳風險需個別評估');
add(o.risk_confirmed!=='是','尚未經醫療團隊確認為低風險 PTMC');
const unknown=['ete_suspected','ln_suspected','trachea_relation','rln_relation','distribution','radiation_history','family_history_1st','hereditary_syndrome'].some(k=>!o[k]||o[k]==='不確定');
add(unknown,'部分關鍵臨床資料尚未確認');
const common='此為討論提示，不是自動適應症、禁忌症判定或治療建議；須由醫師複核。';
return {flags,items:[
['主動監測（AS）','確認低風險、病灶位置與 ETE/LN 狀態，並評估追蹤可行性及病人意願。'],
['熱消融（RFA）','確認病灶大小、數量、位置、氣管／神經安全距離、病理診斷及局部治療適用性；長期證據與手術不同。'],
['手術（Surgery）','討論是否有需要積極治療的臨床特徵、單側／雙側病灶與可能手術範圍、聲音及副甲狀腺相關風險。']
],common};}