const COURSE = {
  title: "Capacitação Profissional",
  modules: [
    { id:1, title:"Fundamentos", lessons: [
{
  id:'intro', title:'A Voz se Constrói',
  cards:[
    {icon:'🎯', sys:'corpo', h:'Cantar é treino, não talento', p:'Quem fala, tem voz — e quem tem voz pode cantar melhor do que canta hoje. Cantar é coordenação muscular treinada com direção, não um dom raro.', prof:'Reforça o modelo motor-skill da voz cantada: aprendizagem por repetição e feedback, não aptidão inata.'},
    {icon:'🌬️', sys:'ar', h:'Três elementos trabalham juntos', p:'Ar (combustível: sem controle, a voz falha, cansa e aperta) • Pregas vocais (precisam vibrar livres, não espremidas) • Corpo (precisa repetir o ajuste até automatizar, não só entender).'},
    {icon:'📈', sys:'corpo', h:'Treinar certo > treinar muito', p:'Não treinar não muda nada; treinar errado trava a voz; treinar certo evolui. Alunos avançam em ritmos diferentes — isso é processo, não problema. A única comparação válida é "você hoje" vs "você da semana passada".'},
    {icon:'🗓️', sys:'corpo', h:'Linha do tempo do aluno', p:'Mês 1: consciência vocal, base técnica, primeiros ajustes, confiança inicial • Mês 2: aplicação forte em repertório, construção de identidade vocal, segurança do início ao fim • Mês 3: preparação para o Play Voice, ensaio com propósito, vivência real de palco.'},
    {icon:'🎤', sys:'corpo', h:'Play Voice: o palco é parte do método', p:'Objetivo: tirar o aluno da zona de conforto, colocar repertório em prática, desenvolver segurança/presença/entrega e transformar treino em performance. Desde a Aula 1, tudo aponta para isso.', prof:'Ligue com a literatura de performance anxiety / exposição gradual: performar cedo reduz a ansiedade de palco acumulada.'}
  ],
  callout:'O aluno não vai treinar "canto" — ele vai treinar <strong>ataque, sustentação, controle, afinação e confiança</strong>, como habilidades separadas.',
  mcqs:[
    {q:'Segundo o material, cantar bem depende principalmente de:', opts:['Talento raro e inato','Coordenação muscular treinada com direção','Sorte e genética','Imitar outros cantores'], correct:1},
    {q:'Qual é a comparação de evolução considerada válida pelo método?', opts:['O aluno com outros alunos da turma','Você hoje vs. você da semana passada','O aluno com cantores profissionais','Não existe comparação no método'], correct:1}
  ],
  openqs:['Por que "treinar errado" pode travar a voz, em vez de simplesmente não ajudar?']
},
{
  id:'relax', title:'Relaxamento — Tirando o Freio da Voz',
  cards:[
    {icon:'🎯', sys:'corpo', h:'Objetivo da aula', p:'Eliminar tensões de pescoço, ombros e cervical • preparar o corpo para cantar com leveza, controle e segurança • criar um ritual de pré-treino • reduzir risco de esforço vocal desde o início.'},
    {icon:'📍', sys:'lar', h:'Por que essa região importa', p:'Quando ficamos nervosos ou inseguros, pescoço e ombros tensionam primeiro — exatamente onde fica a laringe. Com tensão: a voz sai mais apertada, o controle diminui, o cansaço aparece mais rápido e o risco de sobrecarga vocal aumenta.'},
    {icon:'🧘', sys:'corpo', h:'Preparação do ambiente e postura', p:'Escolha um lugar calmo, pode colocar música relaxante. Sentado: postura ereta sem encostar totalmente na cadeira. Em pé: pés firmes, ombros soltos. Pode fechar os olhos para aumentar a percepção corporal.'},
    {icon:'🔁', sys:'corpo', h:'5 exercícios (sempre nessa ordem)', p:'1) "SIM" vertical, queixo guia, 5 reps • 2) "NÃO" horizontal, 5 reps • 3) "TALVEZ" lateral, orelha em direção ao ombro, 5 reps alternando • 4) Rotação de cabeça/pescoço, 5+5 reps • 5) Elevação de ombros com respiração (inspira subindo, expira soltando), 5 reps.'},
    {icon:'🔊', sys:'lar', h:'Microfechamento sonoro (6 sons)', p:'SOM01 Suspiro "haa" (alívio) • SOM02 "BRR" motor de carro (vibração no rosto) • SOM03 "MMM" fechado (satisfação) • SOM04 "NNN" (língua no céu da boca) • SOM05 "ZZZ" abelha (fluxo contínuo) • SOM06 "VVV" ventilador (lábios nos dentes). Regra de ouro: se ficou mais leve, está certo; se travou, pare.'},
    {icon:'✅', sys:'corpo', h:'Checklist final', p:'Pescoço mais leve? Ombros mais baixos? Respiração mais solta? Se sim, está pronto para cantar. O segredo não é perfeição, é constância — use essa sequência ao acordar, antes do treino, do ensaio ou do Play Voice.'}
  ],
  callout:'Regra Musicalize: antes de cantar mais forte, mais alto ou mais bonito, você precisa <strong>cantar mais solto</strong>.',
  mcqs:[
    {q:'Por que a tensão no pescoço e ombros afeta diretamente o canto?', opts:['Porque atrapalha a postura no palco','Porque é onde fica a laringe, onde as pregas vocais vibram','Porque cansa o cantor antes da apresentação','Não tem relação direta com a voz'], correct:1},
    {q:'Qual é a ordem correta da sequência de relaxamento?', opts:['Ombros → Sim → Não → Talvez → Rotação','Sim → Não → Talvez → Rotação → Ombros com respiração','Rotação → Talvez → Não → Sim → Ombros','A ordem não importa'], correct:1}
  ],
  openqs:['O que é o "microfechamento sonoro" e por que ele não é considerado vocalize?']
},
{
  id:'respira', title:'Respiração',
  cards:[
    {icon:'🫁', sys:'ar', h:'Respirar para viver ≠ respirar para cantar', p:'No canto, não vence quem puxa mais ar — vence quem controla melhor o ar que solta. Sem controle respiratório o corpo trava, e corpo travado não performa.'},
    {icon:'⚙️', sys:'ar', h:'Como a respiração funciona', p:'Inspira: ar entra pelo nariz/boca → passa pela laringe → desce pela traqueia → enche os pulmões → costelas se expandem → diafragma desce. Expira: pulmão esvazia; se só respirar, pregas ficam abertas; se fizer som, elas fecham, vibram e produzem a voz.'},
    {icon:'🎵', sys:'lar', h:'Grave, agudo e vibração', p:'Agudos: pregas mais esticadas. Graves: pregas mais encurtadas. Sempre vibrando. Teste rápido: mão na garganta, só respirando não vibra, fazendo um som vibra.'},
    {icon:'⛽', sys:'ar', h:'Capacidade pulmonar x controle', p:'Cada pulmão tem um tamanho, mas no canto ter muito ar não resolve — controle resolve. "Não adianta tanque cheio se você não sabe usar o acelerador."'},
    {icon:'🫃', sys:'ar', h:'Respiração costo-diafragmática', p:'Prioriza barriga para dentro (menos tensão, melhor postura, mais apoio) com costelas abertas, diafragma ativo e esterno levemente alto o tempo todo. Existem duas formas comuns (barriga fora/dentro) e as duas funcionam — o método prioriza a segunda.'},
    {icon:'⏱️', sys:'ar', h:'Apneia, pró-percepção e ar de reserva', p:'Apneia: inspire e segure o ar 3-5s para sentir o corpo por dentro. Ar de reserva é emergência — usar sempre gera tensão; regra simples: acabou o ar, respira de novo.'},
    {icon:'📊', sys:'ar', h:'Bloco de treino respiratório', p:'Treino 1 "S" contínuo (controle e constância) • Treino 2 "S" staccato "tss tss tss" (diafragma ativo) • Treino 3 cronômetro (medir evolução, sem competição). Referência: mulheres ~15s, homens ~20s de sustentação — não é regra fixa, evolua aos poucos.'},
    {icon:'👃', sys:'ar', h:'Respiração nasal, oral e mista', p:'Em repouso: nasal (filtra, aquece, umidifica). No canto: mista (nariz + boca), porque há pouco tempo entre frases e necessidade de resposta rápida. Por isso, hidrate-se e, fora do canto, respire pelo nariz.'}
  ],
  callout:'No canto, <strong>não vence quem puxa mais ar</strong> — vence quem controla melhor o ar que já tem.',
  mcqs:[
    {q:'Qual tipo de respiração o método prioriza para o canto?', opts:['Respiração alta, elevando os ombros','Respiração costo-diafragmática, barriga para dentro','Respiração só torácica','Não há prioridade, tanto faz'], correct:1},
    {q:'Quando o cantor deve usar o "ar de reserva"?', opts:['Em toda frase longa','Como estratégia padrão de treino','Apenas em emergência','Só em notas agudas'], correct:2},
    {q:'Qual é o tempo médio de referência de sustentação do "S" contínuo para homens?', opts:['~5 segundos','~10 segundos','~20 segundos','~40 segundos'], correct:2}
  ],
  openqs:['Por que respirar "para viver" é diferente de respirar "para cantar"?']
},
{
  id:'condresp', title:'Condicionamento Respiratório & Conexão Vocal',
  cards:[
    {icon:'🎯', sys:'ar', h:'Três recursos do condicionamento', p:'Respiron, Shaker e MindVox (retorno vocal). Não substituem o treino — potencializam força respiratória, controle do ar, estabilidade vocal e segurança emocional antes de cantar.'},
    {icon:'🌬️', sys:'ar', h:'Respiron — entrada do ar', p:'Aparelho de fisioterapia respiratória que treina a capacidade pulmonar (entrada de ar), com 3 bolinhas e níveis 0-3 (comece no mínimo). Exercício: 20 repetições (pode dividir 10+10). Sensações comuns: tontura/dor de cabeça leve — pare, descanse e retome.'},
    {icon:'💨', sys:'ar', h:'Shaker — saída do ar', p:'Trabalha o oposto: você sopra, criando resistência na saída, fortalecendo a musculatura intercostal interna. Sequência: 1) respiração sem voz (contínuo/staccato) 2) nota longa 3) glissando 4) nota aguda confortável 5) melodia simples. Atenção: nunca force; se doer ou ficar rouco, pare.'},
    {icon:'🎧', sys:'corpo', h:'MindVox — escuta e consciência', p:'Retorno vocal individual: permite se escutar melhor, perceber nuances e ajustar sem forçar. Usado em respiração, vocalizes, afinação e repertório. Sem o aparelho: use a mão em concha no ouvido. Reduz ansiedade e esforço desnecessário antes de subir ao palco.'},
    {icon:'🚀', sys:'corpo', h:'Impacto na performance', p:'Antes de uma apresentação, esses recursos ajudam a acordar a respiração, reduzir a sensação de falta de ar e aumentar a confiança. Na trajetória do cantor: constroem resistência, melhoram suporte respiratório e reduzem tensão por esforço.'}
  ],
  callout:'"Equipamento serve ao corpo. Técnica serve à performance. Treino serve à <strong>liberdade</strong>."',
  mcqs:[
    {q:'Qual a diferença fundamental entre Respiron e Shaker?', opts:['Não há diferença, são o mesmo aparelho','Respiron treina a entrada do ar; Shaker treina a saída (resistência ao soprar)','Respiron é para aquecimento, Shaker para desaquecimento','Shaker substitui totalmente o treino vocal'], correct:1},
    {q:'Para que serve o MindVox?', opts:['Aumentar a capacidade pulmonar','Fortalecer a musculatura intercostal','Dar retorno vocal para o cantor se ouvir melhor','Medir o tempo máximo de fonação'], correct:2}
  ],
  openqs:['O que fazer se, durante o uso do Respiron ou do Shaker, surgir dor, rouquidão ou tontura?']
},
{
  id:'coord', title:'Coordenação Pneumofonoarticulatória',
  cards:[
    {icon:'🔗', sys:'corpo', h:'Três sistemas, uma só ação', p:'Pneumo (respiração/fluxo de ar) + Fono (fonação/vibração das pregas) + Articulatória (boca, língua, fala) precisam acontecer ao mesmo tempo, de forma organizada. Quando falha: cansaço vocal, perda de ar no fim das frases, articulação "engolida", instabilidade e esforço excessivo.'},
    {icon:'🎭', sys:'corpo', h:'Importância para o palco', p:'Permite finalizar frases longas sem acelerar, manter clareza na letra sob esforço, sustentar notas finais com estabilidade e reduzir a tensão causada por ansiedade — essencial para o Play Voice, onde o foco deve estar na interpretação, não em ajustes técnicos conscientes.'},
    {icon:'📅', sys:'corpo', h:'Exercício 1 — Meses do Ano', p:'Postura (ombros relaxados, esterno alto, umbigo para dentro). Inspire fundo, diga os meses em uma respiração só articulando claramente, solte o ar restante. Progressão: Janeiro → Janeiro/Fevereiro → ... acrescentando um mês por vez. Não precisa chegar em dezembro no início; não usar ar de reserva.'},
    {icon:'💨', sys:'ar', h:'Exercício 2 — TMF com "S"', p:'Postura correta, inspire fundo, solte o ar em S contínuo cronometrado. Não empurrar o ar, manter sensação de apneia leve, não usar ar de reserva.'},
    {icon:'🎤', sys:'lar', h:'Exercício 3 — TMF com vogal "A"', p:'Integra respiração e fonação. Progressão: sustentar "A" por 5s → 8s → 11s → tentar 15s, avançando gradualmente. Som contínuo e estável, sem força, interrompendo antes de usar ar de reserva. Referência de literatura (TMF): mulheres mín. 15s, homens mín. 20s.'},
    {icon:'📋', sys:'corpo', h:'Sequência recomendada de treino', p:'Relaxamento corporal → Respiração costo-diafragmática → Controle respiratório → Coordenação pneumofonoarticulatória (meses do ano) → Tempo Máximo de Fonação → Aplicação em frases cantadas. Essa ordem constrói memória muscular e automatiza os ajustes.'}
  ],
  callout:'O objetivo final é que a técnica aconteça de forma <strong>automática</strong>, liberando a performance para ser fluida e expressiva.',
  mcqs:[
    {q:'O que significa "coordenação pneumofonoarticulatória"?', opts:['Apenas o controle da respiração','A integração entre respiração, fonação e articulação','Um tipo de aquecimento vocal','Um sub-registro do belting'], correct:1},
    {q:'O que é o Tempo Máximo de Fonação (TMF)?', opts:['O tempo total de uma aula de canto','O tempo que se sustenta um som contínuo numa única expiração','O tempo de aquecimento antes de cantar','O tempo entre um exercício e outro'], correct:1}
  ],
  openqs:['Dê um exemplo de como uma articulação travada pode prejudicar mesmo uma boa respiração.']
},
{
  id:'musc', title:'Músculos Intrínsecos da Laringe',
  cards:[
    {icon:'🔬', sys:'lar', h:'Função geral', p:'Os músculos intrínsecos da laringe abrem, fecham, tensionam, encurtam ou alongam as pregas vocais. Esses ajustes permitem sons graves, médios e agudos, e influenciam diretamente potência e qualidade da voz.'},
    {icon:'⬆️', sys:'lar', h:'CT — Cricotireóideo', p:'Responsável por alongar as pregas vocais nos agudos. É um músculo de resistência (trabalha por longos períodos sem fadigar fácil), mas não é um músculo de potência. Quanto maior sua participação, a voz soa mais leve, mais doce, menos densa.', prof:'O CT é chamado de "singer\'s muscle" na literatura anglo-saxã por seu papel central no controle de pitch agudo.', link:'https://teachmeanatomy.info/neck/viscera/larynx/muscles/'},
    {icon:'⬇️', sys:'lar', h:'TA — Tireoaritenóideo', p:'Responsável por encurtar as pregas vocais nos graves. É um músculo de explosão/potência — quando participa mais, a voz fica mais cheia, forte, encorpada, mas cansa com mais facilidade se usado em excesso ou sem equilíbrio.'},
    {icon:'⚖️', sys:'lar', h:'Outros músculos importantes', p:'CAP (Cricoaritenóideo Posterior): único abdutor — abre as pregas vocais. Adutores (fecham as pregas): CAL (Cricoaritenóideo Lateral), AA (Aritenóideos) e TA externo. Juntos controlam o fechamento glótico e a pressão subglótica (relação entre o ar dos pulmões e a vibração das pregas).', prof:'Base do modelo Body-Cover de Hirano: a combinação CT/TA determina rigidez e estratificação das pregas vocais, não um músculo isolado.'}
  ],
  callout:'Entender essa musculatura transforma a técnica de "tentativa e erro" em <strong>processo consciente</strong>.',
  mcqs:[
    {q:'Qual músculo predomina na produção de notas agudas?', opts:['TA (Tireoaritenóideo)','CT (Cricotireóideo)','CAP (Cricoaritenóideo Posterior)','IA/AA (Aritenóideos)'], correct:1},
    {q:'Qual é o único músculo abdutor (que abre as pregas vocais)?', opts:['CT','TA','CAP','CAL'], correct:2}
  ],
  openqs:['Por que o TA é chamado de "músculo de explosão" e o CT de "músculo de resistência"?']
},
{
  id:'anatomia', title:'Anatomia do Aparelho Fonador',
  cards:[
    {icon:'🫁', sys:'ar', h:'Sistema respiratório', p:'Pulmões, diafragma, caixa torácica e músculos intercostais formam o "motor" da voz — geram e controlam o fluxo de ar que chega à laringe.'},
    {icon:'🔬', sys:'lar', h:'Laringe e pregas vocais', p:'Estrutura cartilaginosa (tireoide, cricoide, aritenoides) que abriga as pregas vocais — a verdadeira fonte sonora, onde o ar vira vibração.'},
    {icon:'🔊', sys:'lar', h:'Trato vocal e ressonadores', p:'Faringe, boca, nariz e seios da face moldam o som da glote, dando timbre e projeção — é o "amplificador natural" da voz.'},
    {icon:'🧠', sys:'corpo', h:'Controle neuromuscular', p:'O sistema nervoso central comanda cada ajuste muscular em milissegundos — por isso a técnica vocal é, fisiologicamente, aprendizagem motora, não apenas repetição mecânica.'}
  ],
  callout:'Conhecer essas quatro peças ajuda a entender <strong>por que</strong> cada exercício do curso funciona.',
  mcqs:[
    {q:'Qual estrutura é considerada a fonte sonora da voz?', opts:['Pulmões','Pregas vocais, dentro da laringe','Cavidade nasal','Diafragma'], correct:1},
    {q:'Qual é a função do trato vocal (faringe, boca, nariz)?', opts:['Gerar o fluxo de ar','Produzir a vibração sonora inicial','Moldar e amplificar o som já produzido','Controlar o sistema nervoso'], correct:2}
  ],
  openqs:['Por que entender a anatomia básica ajuda a compreender os exercícios das próximas aulas?']
}
] },
    { id:2, title:"Técnica Vocal", lessons: [
{
  id:'registros', title:'Registros e Bordas Vocais',
  cards:[
    {icon:'🎚️', sys:'lar', h:'Três registros vocais', p:'Consenso entre estudiosos: Registro Basal, Registro Modal (com subdivisões grave/média/aguda) e Registro Elevado. É dentro do modal que acontece a maior parte do canto.'},
    {icon:'⚖️', sys:'lar', h:'Participação muscular por registro', p:'Basal: quase participação absoluta do TA (CT atua minimamente). Médio: equilíbrio maior entre TA e CT. Peito: maior participação do TA. Cabeça: maior participação do CT. Nenhum músculo age sozinho — sempre há combinação.'},
    {icon:'🎭', sys:'lar', h:'Voz de cabeça x Falsete', p:'Tratados como diferentes por conta da musculatura: no falsete há participação muito grande do CT e quase nenhuma do TA; na voz de cabeça também predomina o CT, mas com mais participação do TA que no falsete. A diferença está na fisiologia, não só no som.'},
    {icon:'🔲', sys:'lar', h:'Bordas densa e tênue', p:'Borda densa: maior participação do TA, prega mais encurtada, maior contato entre bordas, som mais encorpado (voz cotidiana de fala). Borda tênue: maior participação do CT, prega alongada, menor contato, som mais leve (ex: falando com bebê/animal).'},
    {icon:'📊', sys:'lar', h:'Relação bordas x registros', p:'Regiões mais graves tendem a borda densa; regiões mais agudas tendem a borda tênue — mas uma mesma nota pode ser produzida de formas diferentes, dependendo da intenção vocal e do ajuste muscular.'},
    {icon:'💡', sys:'corpo', h:'Consciência corporal como pilar', p:'Compreender musculatura, registros e bordas permite consciência corporal — no palco não se pensa em nomes de músculos, mas é esse estudo que permite a voz funcionar livre, com segurança e expressão. A técnica existe para servir à performance, não para travá-la.'}
  ],
  callout:'Quebra de registro ("clique") ocorre por <strong>desequilíbrio</strong> na participação muscular — entender a fisiologia ajuda a suavizar essa transição.',
  mcqs:[
    {q:'Quais são os três registros vocais em consenso entre os estudiosos?', opts:['Peito, misto e cabeça','Basal, modal e elevado','Grave, médio e agudo','Denso, tênue e misto'], correct:1},
    {q:'O que diferencia voz de cabeça de falsete, segundo o material?', opts:['Não há diferença nenhuma','A altura da nota cantada apenas','A participação muscular (fisiologia), não só o som','O estilo musical utilizado'], correct:2}
  ],
  openqs:['Explique a diferença entre borda densa e borda tênue com suas próprias palavras.']
},
{
  id:'belting1', title:'Belting Contemporâneo — Parte 1: Fisiologia',
  cards:[
    {icon:'💥', sys:'lar', h:'O que é Belting', p:'Manobra vocal caracterizada por emissão potente, brilhante, clara, com alta projeção sonora. Surgiu no teatro musical, onde cantores precisavam cantar por longos períodos, sustentar notas intensas e manter clareza de texto sem perder a voz.'},
    {icon:'⚡', sys:'lar', h:'Por que é diferente da voz de peito', p:'A voz de peito tem grande participação do TA (músculo de explosão) — usada de forma contínua em regiões altas, tende a cansar rápido, gerar esforço excessivo e comprometer resistência. O belting surge como alternativa: não é voz de peito pura, acontece predominantemente no registro médio, com equilíbrio muscular entre TA e CT.'},
    {icon:'🎯', sys:'corpo', h:'Princípio fundamental', p:'"Máxima projeção com o mínimo esforço" = potência sem tensão, brilho sem pressão excessiva, intensidade sem desgaste. Quando a técnica está correta, cantar se torna confortável mesmo em regiões intensas.'},
    {icon:'🌍', sys:'corpo', h:'Belting em vários estilos', p:'Embora tenha surgido no teatro musical, hoje é usado em pop, rock, gospel, sertanejo e música comercial contemporânea — para destacar frases, enfatizar emoções e trazer impacto sonoro. Não é para ser usado o tempo todo, mas como recurso expressivo.'},
    {icon:'🧠', sys:'corpo', h:'Consciência corporal (propriocepção)', p:'Pilar central: sentir o que acontece no corpo, reconhecer como um ajuste foi feito e conseguir reproduzi-lo conscientemente. A técnica não é apenas executar um som, mas memorizar corporalmente como ele foi produzido.'}
  ],
  callout:'O belting contemporâneo entende a voz como <strong>sistema integrado</strong>: musculatura + respiração + ressonância + percepção corporal.',
  mcqs:[
    {q:'Qual é o princípio fundamental do belting contemporâneo?', opts:['Máximo volume possível','Máxima projeção com o mínimo esforço','Usar sempre voz de peito pura','Cantar apenas no registro elevado'], correct:1},
    {q:'Por que a voz de peito pura cansa rápido em notas altas?', opts:['Porque usa muito CT','Porque tem grande participação do TA, músculo de explosão','Porque não usa ressonância','Porque exige respiração mista'], correct:1}
  ],
  openqs:['Por que o belting não deve ser usado "o tempo todo", segundo o material?']
},
{
  id:'belting2', title:'Belting Contemporâneo — Parte 2: Sub-registros e Calling',
  cards:[
    {icon:'🧩', sys:'lar', h:'Registros x Sub-registros', p:'Registros dizem respeito ao comportamento geral da prega vocal. Sub-registros dizem respeito a configurações específicas dentro desses registros — cada um com ajuste muscular próprio, qualidade sonora específica e sensação corporal diferente.'},
    {icon:'📣', sys:'corpo', h:'O que é "Calling"', p:'Do inglês "to call" (chamar): o ensino dos sub-registros acontece por meio do calling, em 3 etapas — 1) Ouvir como o ajuste soa, 2) Reproduzir tentando imitar o som, 3) Memorizar registrando corporalmente como foi feito. Evita que o aluno force a voz ou "pense demais" durante o canto.'},
    {icon:'🗣️', sys:'lar', h:'Sub-registros e seus calls', p:'Subgrave/Peito: call "Iô" (grave, para baixo) • Voz plena: "Uou" • Peer (pier belting): "Uenha" • Cover belting: fala musicalizada (ex: meses do ano) • Speaking: "Iá" (fala projetada) • Health belting: "Iá" mais equilibrado • Top voice: "Uou" em região mais elevada.'},
    {icon:'🔁', sys:'corpo', h:'Importância do treino diário', p:'Cantar é muscular: precisa de repetição, consistência e persistência. O treino diário fortalece a musculatura, cria memória corporal e automatiza os ajustes — no início o aluno pensa mais, com o tempo o corpo aprende e o ajuste vira automático.'},
    {icon:'🎤', sys:'corpo', h:'Conexão com o palco', p:'No palco, o cantor não pensa em calls, músculos ou sub-registros — ele canta. É o treino diário e a consciência corporal que permitem segurança, entrega emocional e performance verdadeira.'}
  ],
  callout:'Cada call ativa um <strong>ajuste específico</strong> da musculatura e da ressonância — por isso o "ouvir → reproduzir → memorizar" é tão importante.',
  mcqs:[
    {q:'Quais são as três etapas do processo pedagógico do "calling"?', opts:['Cantar, gravar e ouvir','Ouvir, reproduzir e memorizar','Ler, repetir e avaliar','Aquecer, cantar e desaquecer'], correct:1},
    {q:'Qual é o call do sub-registro "Voz Plena" (Soul Belting)?', opts:['"Iô"','"Uenha"','"Uou"','"Iá"'], correct:2}
  ],
  openqs:['Por que o método evita que o aluno "pense demais" durante o canto, usando o calling em vez de explicações técnicas longas?']
},
{
  id:'basesvoz', title:'Bases da Voz Cantada',
  cards:[
    {icon:'🏛️', sys:'ar', h:'Três pilares', p:'A voz cantada se sustenta sobre propulsão, retenção e ressonância. Quando equilibrados, a voz fica saudável, eficiente, expressiva e sustentável, no estudo e na performance.'},
    {icon:'💨', sys:'ar', h:'Propulsão — a base do som', p:'Relacionada ao sopro que impulsiona a vibração das pregas vocais. Sem propulsão adequada, a voz perde sustentação, estabilidade e eficiência. Sustentar não é empurrar — força gera tensão, sustentação gera liberdade.'},
    {icon:'🎈', sys:'ar', h:'Manobra de Floating', p:'Equilibra propulsão e retenção. Postura: esterno levemente elevado, ombros relaxados, costelas abertas. Execução: esvazie o ar → inspire silenciosamente → apneia breve → libere o ar sem empurrar, como se flutuasse para fora. Reduz pressão subglótica excessiva e risco de fadiga.'},
    {icon:'🔒', sys:'lar', h:'Retenção — a formação do som', p:'Relacionada à adução (fechamento) das pregas vocais — é a força opositora da propulsão, onde a voz nasce. Excesso de retenção: voz rígida, perda de flexibilidade. Retenção insuficiente: som soproso, projeção reduzida. O objetivo é equilibrar, não prender nem deixar escapar demais.'},
    {icon:'🔊', sys:'lar', h:'Ressonância — o filtro da voz', p:'Amplifica o som, dá cor à voz e projeta a emissão no espaço. Atua como filtro acústico, moldando o som da glote. Ressonadores: laringofaringe, orofaringe, rinofaringe, além de lábios, língua, palato mole, altura da laringe e estruturas paranasais.'},
    {icon:'✨', sys:'corpo', h:'Síntese final', p:'Voz cantada saudável exige: equilíbrio propulsão-retenção (sopro estável), domínio da ressonância (projeção e articulação), controle sopro-ressonância (performance), relaxamento corporal e manutenção da saúde vocal, com emissão sem esforço.'}
  ],
  callout:'A saúde vocal é <strong>consequência direta</strong> do equilíbrio entre propulsão, retenção e ressonância.',
  mcqs:[
    {q:'Quais são os três pilares da voz cantada segundo esta aula?', opts:['Ataque, sustentação e afinação','Propulsão, retenção e ressonância','Respiração, articulação e emoção','Volume, brilho e projeção'], correct:1},
    {q:'O que acontece quando há excesso de retenção (fechamento glótico)?', opts:['O som fica soproso e a projeção diminui','A voz fica rígida e perde flexibilidade','A ressonância melhora muito','Não há nenhum efeito perceptível'], correct:1}
  ],
  openqs:['Explique com suas palavras o objetivo da "manobra de floating".']
},
{
  id:'emissao', title:'Exercícios para uma Boa Emissão da Voz Cantada',
  cards:[
    {icon:'🎯', sys:'corpo', h:'Objetivo: coordenação, não estética', p:'Não se treina estética vocal, volume ou potência — treina-se coordenação neuromuscular: ensinar o corpo a produzir voz de forma equilibrada, eficiente e saudável. Essa base sustenta resistência vocal, estabilidade da afinação, liberdade emocional no palco e longevidade da voz.'},
    {icon:'🧍', sys:'corpo', h:'Postura e apoio', p:'Ombros relaxados, esterno levemente elevado (sem tensionar ombros ao elevá-lo), mantido tanto na inspiração quanto na expiração. Costelas abertas, sensação de umbigo "lá nas costas", barriga levemente contraída sem rigidez. Dica: treine na frente do espelho.'},
    {icon:'🅱️', sys:'lar', h:'Exercício — Abaixamento de laringe (B prolongado)', p:'Postura ajustada, execute "Bbbbbb..." por 5 repetições, sem força nem volume excessivo, com sensação de espaço interno. Ajuda a organizar a laringe e reduzir tensões iniciais.'},
    {icon:'🌬️', sys:'ar', h:'Exercício — Controle respiratório com S', p:'Esvazie o ar → inspire mantendo esterno alto/costelas abertas → apneia funcional breve → solte em S bem pequenininho, contínuo, sem oscilar, sem "jatos" de ar, sensação de o ar flutuar para fora. Mínimo 5 repetições, sem usar ar de reserva.'},
    {icon:'📅', sys:'ar', h:'Economia vocal — Meses do Ano', p:'Introduz voz mantendo o equilíbrio construído: postura ajustada, apneia 3-5s, fale os meses do ano em uma respiração só. Voz deve ficar pequenininha, sem volume, sem sopro excessivo, sem falhas, "vindo lá do fundo" — não é voz de fala nem de palco, é treino de controle muscular.'},
    {icon:'👂', sys:'corpo', h:'Imitação consciente e propriocepção', p:'Ouça o modelo → reproduza → observe o que acontece no corpo → memorize a sensação. Depois de reproduzir, pergunte-se "o que eu fiz no meu corpo para esse som acontecer?" — é isso que transforma exercício em técnica real.'}
  ],
  callout:'Nenhum exercício funciona com prática esporádica — no início tudo é mais consciente e "pensado"; com o tempo, <strong>o corpo automatiza</strong> e a voz fica livre.',
  mcqs:[
    {q:'Qual é o foco principal dos exercícios desta aula?', opts:['Estética e volume vocal','Coordenação neuromuscular','Velocidade de execução','Repertório musical'], correct:1},
    {q:'Como deve soar o exercício dos "Meses do Ano" nesta fase?', opts:['Forte e projetado, como no palco','Pequenininho, sem volume, "vindo lá do fundo"','Igual à voz de fala cotidiana','Com bastante escape de ar'], correct:1}
  ],
  openqs:['Por que a pergunta "o que eu fiz no meu corpo para esse som acontecer?" é tão importante no método?']
},
{
  id:'ataques', title:'Ataques Vocais',
  cards:[
    {icon:'🎬', sys:'lar', h:'O que é ataque vocal', p:'É como as pregas vocais se fecham no momento em que o som começa. Todo canto ou fala tem um tipo de ataque acontecendo. Interfere na qualidade do som, manutenção da voz, pressão sobre as pregas, expressividade e saúde vocal. Existem três tipos: suave, duro e semi-suave.'},
    {icon:'🌤️', sys:'lar', h:'Ataque suave', p:'As pregas se fecham depois que o ar já começou a passar — há um escape de ar perceptível no início do som (ex: "HA" onde o ar passa primeiro, depois a prega fecha e vibra). Traz suavidade, aconchego, doçura, sensação de intimidade. Usado em início de frase mais leve e acolhedor.'},
    {icon:'⚡', sys:'lar', h:'Ataque duro', p:'A prega vocal se fecha antes da passagem do ar. Quando o som sai, vem com mais impacto ("HA! HA!"), gerando mais intensidade, presença e firmeza. Importante: ataque duro ≠ golpe de glote — o golpe é traumático (pregas se chocam com força, como em gritos); o ataque duro é controlado e não machuca quando bem executado.'},
    {icon:'⚖️', sys:'lar', h:'Ataque semi-suave (o equilíbrio)', p:'O fechamento das pregas vocais e a passagem do ar acontecem simultaneamente. Evita ataques bruscos, emissões aspiradas e golpes glóticos desnecessários — é o caminho para o equilíbrio entre os dois extremos.'},
    {icon:'⚙️', sys:'lar', h:'Ataques, pressão subglótica e musculatura', p:'Regra: mais sopro → mais fechamento compensatório → mais recrutamento de TA → excesso de TA gera voz pesada, dura e instável. Sinais de desequilíbrio: voz dura, dificuldade nos agudos, quebra na região média — a correção é ajustar o apoio respiratório, não "forçar menos a garganta".'}
  ],
  callout:'O ataque semi-suave é o caminho técnico para <strong>evitar os dois extremos</strong>: nem soproso demais, nem duro demais.',
  mcqs:[
    {q:'Qual a diferença entre ataque duro e golpe de glote?', opts:['São a mesma coisa','Ataque duro é controlado e não machuca; golpe de glote é traumático','Golpe de glote é técnica recomendada para agudos','Ataque duro só existe no falsete'], correct:1},
    {q:'O que caracteriza o ataque semi-suave?', opts:['Ar passa bem antes do fechamento das pregas','Pregas fecham bem antes da passagem do ar','Fechamento das pregas e passagem do ar acontecem simultaneamente','Não envolve as pregas vocais'], correct:2}
  ],
  openqs:['Se um aluno sente "voz dura" e dificuldade nos agudos, qual é a correção indicada pelo material — e por quê?']
},
{
  id:'mecanismos_ciencia', title:'Mecanismos Vocais na Ciência da Voz (M0–M4)',
  cards:[
    {icon:'🔬', sys:'lar', h:'O que são mecanismos vocais', p:'Modelo científico (Roubeau, Henrich, Castellengo) que descreve padrões de vibração das pregas vocais definidos pela musculatura laríngea — usado internacionalmente em pesquisa e pedagogia vocal.', prof:'Base teórica complementar ao Cross-Register model de Sundberg; útil para dialogar com literatura internacional de vocologia.'},
    {icon:'🔉', sys:'lar', h:'M0 e M1', p:'M0 (vocal fry): vibração irregular e grave, pouca tensão. M1 (modal/peito): prega espessa vibrando em toda a extensão — usado na fala e na maior parte do canto grave/médio.'},
    {icon:'🔺', sys:'lar', h:'M2 e mix', p:'M2 (cabeça/falsete): prega alongada e fina, vibração de borda. A "zona de passagem" entre M1 e M2 é onde ocorre a mistura (mix) — objetivo central do treino de sub-registros deste curso.'},
    {icon:'🌐', sys:'corpo', h:'Por que isso importa', p:'Essa nomenclatura internacional (M0-M2) descreve, com outras palavras, os mesmos fenômenos já estudados nos sub-registros do Módulo 6 — conectar os dois vocabulários amplia sua leitura de outros materiais e cursos.'}
  ],
  callout:'Nomes diferentes (M1/M2, peito/cabeça, TA/CT) costumam descrever <strong>o mesmo fenômeno fisiológico</strong>.',
  mcqs:[
    {q:'O que caracteriza o mecanismo M1?', opts:['Prega alongada e fina, vibração de borda','Prega espessa vibrando em toda a extensão','Ausência total de vibração','Vibração irregular e muito grave (fry)'], correct:1},
    {q:'O que é a "zona de mix" entre M1 e M2?', opts:['Um erro técnico a ser evitado','A região de transição onde M1 e M2 se combinam','Um sub-registro exclusivo do falsete','Uma técnica de respiração'], correct:1}
  ],
  openqs:['Relacione o mecanismo M2 com os sub-registros de borda tênue estudados no Módulo 6.']
},
{
  id:'twang', title:'Twang e Ressonância no Canto Contemporâneo',
  cards:[
    {icon:'📯', sys:'lar', h:'O que é twang', p:'Estreitamento do trato vocal na região da epilaringe (acima das pregas vocais), reforçando harmônicos agudos e criando um som brilhante e projetado, sem precisar de mais volume.'},
    {icon:'🌍', sys:'lar', h:'Twang na literatura internacional', p:'Descrito por Estill Voice Training como qualidade vocal específica, e presente no CVT (Complete Vocal Technique) dentro do modo "Overdrive" — mesmo conceito, nomes diferentes por escola.'},
    {icon:'🔊', sys:'corpo', h:'Projeção sem esforço', p:'Twang permite "cortar" uma banda ou orquestra sem gritar — é economia vocal: mais brilho e alcance auditivo com o mesmo (ou menor) esforço muscular.'},
    {icon:'🎤', sys:'corpo', h:'Aplicação prática', p:'Presente em Peer Belting e Health Belting (Módulo 6) — ao estudar esses sub-registros, você já estava treinando twang, mesmo sem esse nome específico.'}
  ],
  callout:'Twang é <strong>brilho acústico</strong>, não é força — é possível ter twang cantando bem baixinho.',
  mcqs:[
    {q:'Onde ocorre o estreitamento característico do twang?', opts:['Nos lábios','Na região da epilaringe (acima das pregas vocais)','No diafragma','Na cavidade nasal apenas'], correct:1},
    {q:'Qual sub-registro estudado no Módulo 6 mais se relaciona ao twang?', opts:['Sub-registro de Peito','Peer Belting','Top Voice','Speaking'], correct:1}
  ],
  openqs:['Por que "mais brilho" pode significar "menos esforço", e não o contrário?']
}
] },
    { id:3, title:"Saúde e Preparo Vocal", lessons: [
{
  id:'abaixamento', title:'Abaixamento e Estabilização da Laringe',
  cards:[
    {icon:'📍', sys:'lar', h:'Onde fica e como se comporta', p:'A laringe não é fixa — é móvel e flexível. Nos agudos tende a subir, nos graves tende a descer (natural e esperado). O problema não é ela subir, é subir demais sem controle: gera tensão, voz espremida, risco de fadiga/lesão e agudos difíceis de alcançar.'},
    {icon:'🎭', sys:'lar', h:'Laringe alta x controlada', p:'Depende do sub-registro e do estilo: canto lírico usa laringe mais baixa na maior parte da música; pop/rock/teatro musical usam laringe mais elevada em certos filtros/registros. O objetivo da técnica não é travar a laringe, e sim dar comando e estabilidade a ela.'},
    {icon:'💪', sys:'lar', h:'Músculo esternotireóideo', p:'Responsável pelo abaixamento e estabilização da laringe — ajuda a evitar que ela suba de forma descontrolada nos agudos. Precisa ser treinado e fortalecido, como qualquer músculo.'},
    {icon:'🅱️', sys:'lar', h:'Exercício 1 — B prolongado', p:'Só com o fonema B (não M — M é nasal e NÃO abaixa a laringe; teste tampando o nariz: se o som para, é M). Alongue o início do som, permita a "explosão" do B, mão na laringe para sentir. 20x B prolongado + 10x B curto.'},
    {icon:'🍝', sys:'lar', h:'Exercício 2 — Espaguete (sucção com pressão)', p:'Imagine sugar um espaguete: não é só puxar ar, existe pressão ativa na boca. A laringe deve abaixar durante a sucção (confira com a mão). Cuidado: resseca o trato vocal — tenha água por perto. 20x longo + 20x curto.'},
    {icon:'📈', sys:'lar', h:'Resultados esperados', p:'Laringe mais estável, mais controle nos agudos, menos tensão/fadiga, melhor ressonância, voz mais saudável — perceptível até mudança de timbre e sensação de voz mais solta.'}
  ],
  callout:'"Técnica não limita a performance. <strong>Técnica liberta a performance.</strong>" Esta aula é base para todas as próximas.',
  mcqs:[
    {q:'Por que fazer "M" em vez de "B" não funciona no exercício de abaixamento?', opts:['M é mais difícil de pronunciar','M é som nasal e não abaixa a laringe','M machuca as pregas vocais','Não há diferença entre eles'], correct:1},
    {q:'Qual músculo é o principal responsável pela estabilização da laringe?', opts:['Cricotireóideo (CT)','Tireoaritenóideo (TA)','Esternotireóideo','Interaritenóideo (IA)'], correct:2}
  ],
  openqs:['Por que "a laringe subir" durante o canto não é, por si só, um problema?']
},
{
  id:'aquecimento', title:'Aquecimento Vocal Fisiológico',
  cards:[
    {icon:'🎯', sys:'corpo', h:'Objetivos do aquecimento', p:'Melhorar a coaptação da mucosa (vibração/qualidade), aumentar harmônicos, diminuir fluxo transglótico (menos soprosidade), melhorar flexibilidade das pregas, aumentar intensidade/projeção e trabalhar articulação. Tempo médio: 15 minutos.'},
    {icon:'🔉', sys:'lar', h:'Etapa 1 — Vocal fry (ativa o TA/graves)', p:'Som mais grave e relaxado possível, sem força nem constrição — sensação de voz "acordando". 5 repetições, sem tensão.'},
    {icon:'💨', sys:'lar', h:'Etapa 2 — Sopro sonorizado agudo (ativa o CT)', p:'Nota confortável mas aguda, com escape de ar perceptível, sem peso de voz de fala — começa com sopro leve e adiciona som sem interromper o fluxo.'},
    {icon:'👄', sys:'lar', h:'Etapa 3 — Mobilização da mucosa', p:'Vibração de lábios ou língua (trinado) por ~2 minutos numa nota confortável, totalmente relaxada. Glissando (grave→agudo→grave) por ~2 minutos — falhas são normais.'},
    {icon:'📢', sys:'ar', h:'Etapa 4 — Projeção (sons fricativos)', p:'V → Z → J, cada um por ~1 minuto numa nota confortável, depois a sequência V-Z-J pode ser repetida ~10x. Melhora projeção e organiza o fluxo de ar.'},
    {icon:'⚠️', sys:'corpo', h:'Sensação ≠ som bonito', p:'O critério não é soar bonito, é a resposta do corpo — pode parecer estranho e ainda cumprir a função fisiológica. É treino neuromuscular, não apresentação.'}
  ],
  callout:'Quando a voz não é aquecida, o cantor compensa com <strong>força e tensão</strong> — o aquecimento não é opcional.',
  mcqs:[
    {q:'Qual etapa do aquecimento ativa principalmente o músculo TA?', opts:['Vocal fry (graves)','Sopro sonorizado agudo','Sons fricativos V-Z-J','Glissando'], correct:0},
    {q:'Qual é a duração média recomendada para um aquecimento vocal fisiológico eficiente?', opts:['2 minutos','15 minutos','1 hora','30 segundos'], correct:1}
  ],
  openqs:['Por que o critério do aquecimento é "a resposta do corpo" e não "o som bonito"?']
},
{
  id:'desaquecimento', title:'Desaquecimento Vocal',
  cards:[
    {icon:'⚖️', sys:'corpo', h:'Tão importante quanto aquecer', p:'A voz cantada exige ajustes diferentes da fala (laringe, ressonância, pressão subglótica, fechamento). Se não desaquecida, o aparelho fonador pode permanecer em padrão de canto mesmo ao voltar a falar — gerando fadiga, peso, rouquidão e desconforto na fala.'},
    {icon:'1️⃣', sys:'corpo', h:'Etapa 1 — Desativar postura de canto', p:'Movimentos suaves de cabeça (cima/baixo) + as 5 vogais (A-E-I-O-U) em glissando sempre do agudo para o grave, leves, sem força — favorece relaxamento e desativa os ajustes do canto.'},
    {icon:'2️⃣', sys:'lar', h:'Etapa 2 — Lateralização + vibração', p:'Queixo em direção ao ombro, alternando lados, movimento leve e contínuo, associado a vibração de lábios ou língua. Falha na vibração é normal, não interrompe o exercício.'},
    {icon:'3️⃣', sys:'ar', h:'Etapa 3 — Elevação de braços + vogal U', p:'Eleva braços na inspiração, solta na expiração, emite "U" sempre em glissando do agudo para o grave. Libera tensões e relaxa a musculatura da emissão.'},
    {icon:'4️⃣', sys:'lar', h:'Etapa 4 — Bocejo-suspiro', p:'Imagine um bocejo real, boca bem aberta, língua solta, emissão suave com ar. Reduz intensidade vocal, libera faringe e laringe, reorganiza a voz para o padrão falado.'},
    {icon:'5️⃣', sys:'corpo', h:'Etapa 5 — Repouso vocal', p:'Silêncio por ~15 minutos após cantar, evitar falar (principalmente alto ou em ambiente ruidoso) — a prega vocal é pequena e sensível, precisa reorganizar musculatura e mucosa. Etapa 6 (opcional): vocalizes do agudo para o grave.'}
  ],
  callout:'"Aquecer sem desaquecer é como treinar na academia e ir embora <strong>sem alongar</strong>."',
  mcqs:[
    {q:'Por que é importante desaquecer a voz após cantar?', opts:['Para melhorar o timbre na próxima apresentação','Porque o aparelho fonador pode ficar em padrão de canto e prejudicar a fala','Não é importante, é apenas opcional','Para aumentar a extensão vocal'], correct:1},
    {q:'Na etapa de desativação da postura de canto, em que direção deve ser o glissando das vogais?', opts:['Sempre do grave para o agudo','Sempre do agudo para o grave','Não importa a direção','Só em uma nota fixa'], correct:1}
  ],
  openqs:['Por que o repouso vocal (silêncio) faz parte do desaquecimento, e não é só "descansar"?']
},
{
  id:'saude1', title:'Saúde Vocal — Parte 1: Produção e Fatores Ambientais',
  cards:[
    {icon:'🗣️', sys:'lar', h:'Como a voz é produzida', p:'Ar inspirado → pulmões → expiração passa pelas pregas vocais → fecham, vibram, produzem som. Esse som é modificado/amplificado por faringe, cavidade oral, cavidade nasal, seios da face e ossos do crânio — chamamos isso de ressonância.'},
    {icon:'💧', sys:'corpo', h:'Água e alimentação', p:'2-3 litros de água por dia, em pequenos goles, hidratam a laringe e evitam atrito na mucosa. Maçã tem ação adstringente popularmente associada à limpeza da mucosa. Evite gordurosos, achocolatados, condimentados e frituras (aumentam muco, prejudicam articulação/ressonância, podem causar refluxo).'},
    {icon:'🚬', sys:'corpo', h:'Fumo e álcool', p:'Cigarro: prejudica o sistema respiratório, desidrata a mucosa, causa irritação/pigarro/tosse, associado a câncer. Álcool: irrita as pregas vocais e tem efeito anestésico — o indivíduo não percebe o esforço vocal que está fazendo (mesmo efeito de sprays, pastilhas e drops anestésicos).'},
    {icon:'❄️', sys:'corpo', h:'Ar-condicionado e choque térmico', p:'Ar-condicionado reduz umidade, resseca o trato vocal e pode causar choque térmico — recomendação: ~2L de água/dia. Alimentos/bebidas muito gelados podem causar descarga de muco e edema das pregas; correntes de ar frio são risco, principalmente suando ou com pouca roupa.'},
    {icon:'👔', sys:'corpo', h:'Vestuário, medicamentos e reflexo', p:'Evite roupas justas na barriga (dificulta o diafragma) e no pescoço (região da laringe). Medicamentos sem orientação (analgésicos, antibióticos, descongestionantes, calmantes, hormônios) podem causar edema ou ressecamento. Refluxo gastroesofágico atinge boca/nariz/laringe/pregas — evitar deitar após comer e líquidos durante a refeição.'}
  ],
  callout:'Saúde vocal é entender <strong>como a voz é produzida</strong> e quais hábitos colocam essa produção em risco.',
  mcqs:[
    {q:'Por que bebidas alcoólicas são especialmente arriscadas para a voz?', opts:['Porque engordam','Porque têm efeito anestésico e o cantor não percebe o esforço vocal','Porque hidratam demais a garganta','Não têm nenhum risco real'], correct:1},
    {q:'Que quantidade de água por dia é recomendada de forma geral para a saúde vocal?', opts:['500 ml','1 litro','2 a 3 litros','5 litros'], correct:2}
  ],
  openqs:['Por que roupas justas na região abdominal são prejudiciais para quem canta?']
},
{
  id:'saude2', title:'Saúde Vocal — Parte 2: Hábitos, Estresse e Sinais de Alerta',
  cards:[
    {icon:'😴', sys:'corpo', h:'Repouso e estresse', p:'O organismo precisa de ~8h de sono para recuperação — noite mal dormida pode causar voz rouca, fraca ou escape de ar. Estresse excessivo causa cansaço vocal, rouquidão, soprosidade e falta de resistência, pela tensão acumulada na laringe.'},
    {icon:'🏃', sys:'corpo', h:'Esportes e postura corporal', p:'Atividades como caminhada e natação favorecem respiração eficiente e produção vocal energética. Evitar: cabeça elevada/inclinada, tensão facial, sobrancelhas contraídas, pescoço com veias saltadas, ombros elevados/projetados.'},
    {icon:'🤧', sys:'corpo', h:'Hábitos vocais inadequados', p:'Evitar pigarrear (impacto intenso nas pregas) e tossir excessivamente (agressivo); em caso de pigarro/tosse, prefira água. Evitar "competição sonora" (falar em ambientes muito ruidosos). Ambientes com poeira/mofo/cheiros fortes causam rouquidão e irritação respiratória.'},
    {icon:'🚨', sys:'lar', h:'Sinais de alerta', p:'Dor, falhas vocais e cansaço persistente por mais de duas semanas, sem relação com gripe/inflamação, é fundamental procurar fonoaudiólogo ou otorrinolaringologista. O desaquecimento ajuda muito, mas não substitui avaliação profissional quando necessário.'}
  ],
  callout:'Autocuidado vocal é diário — mas <strong>sintoma persistente exige avaliação profissional</strong>, não só mais exercício.',
  mcqs:[
    {q:'Quais atividades físicas são indicadas como benéficas para a resistência vocal?', opts:['Levantamento de peso pesado','Caminhada e natação','Esportes de contato','Nenhuma atividade é recomendada'], correct:1},
    {q:'Diante de sintomas vocais persistentes por mais de duas semanas, sem relação com gripe, o que fazer?', opts:['Esperar mais algumas semanas','Aumentar o volume do treino vocal','Procurar fonoaudiólogo ou otorrinolaringologista','Fazer apenas desaquecimento extra'], correct:2}
  ],
  openqs:['Por que "pigarrear" é considerado um hábito vocal prejudicial, mesmo parecendo inofensivo?']
},
{
  id:'articulacao', title:'Treino Articulatório',
  cards:[
    {icon:'👄', sys:'corpo', h:'O que é articulação', p:'Movimento da boca: abrir, fechar, moldar, ajustar. Impacta a qualidade do som, a clareza da palavra, a facilidade nos agudos e a expressividade — o som muda só com o movimento da boca (ex: "Iá"), sem mudar nota, apoio ou força.'},
    {icon:'⬆️', sys:'lar', h:'Articulação e notas agudas', p:'Grande parte da dificuldade nos agudos está na boca, não na voz. Boca muito fechada ao subir: voz trava, surge tensão, som aperta. Boca aberta corretamente: cria espaço, libera ressonância, reduz tensão, melhora projeção.'},
    {icon:'🍾', sys:'corpo', h:'Sobrearticulação (treino neuromuscular)', p:'Com rolha (ou caneta) entre os dentes: Exercício 1 vogais A-E-I-O-U exagerando; Exercício 2 meses do ano; Exercício 3 números 80-100 (foco: abertura e movimento, não velocidade); Exercício 4 texto falado devagar exagerando no espelho. Dor leve é normal no início.'},
    {icon:'🎶', sys:'lar', h:'Articulação em vocalize (agilidade)', p:'Exercício 5: MI-MI-MA-MI-MI, vocalize descendente, começando confortável e descendo gradualmente. Exercício 6: RI-RA-RE-RU-RI com R vibrante, trabalha língua/agilidade/resistência — se travar, pare, respire, retome, comece lento e acelere aos poucos.'},
    {icon:'🪞', sys:'corpo', h:'O espelho é obrigatório', p:'Observe abertura de boca, movimento do queixo e se a articulação está travada ou livre. Criar esse hábito muda completamente o canto — articulação não é só técnica, é performance: palavra clara conecta, boca aberta projeta.'}
  ],
  callout:'"Cantar não é só emitir nota. <strong>É comunicar.</strong>"',
  mcqs:[
    {q:'Segundo o material, grande parte da dificuldade nos agudos está:', opts:['Na respiração apenas','Na boca (articulação), não na voz em si','No volume do cantor','No estilo musical escolhido'], correct:1},
    {q:'Qual é o objetivo dos exercícios de sobrearticulação com rolha?', opts:['Deixar a fala mais bonita imediatamente','Treino neuromuscular: despertar musculatura facial e criar memória de movimento','Aumentar o volume da voz','Treinar respiração apenas'], correct:1}
  ],
  openqs:['Por que exagerar a articulação (sobrearticulação) ajuda mesmo quando, no dia a dia, não se articula assim?']
},
{
  id:'tvso', title:'Trato Vocal Semi-Ocluído — TVSO',
  cards:[
    {icon:'🔬', sys:'lar', h:'O que é TVSO', p:'Condição em que a saída do ar não está totalmente livre nem bloqueada — resistência controlada que gera ajustes positivos. Favorece a eficiência fonatória, protege a glote e equilibra fonte (pregas vocais) e filtro (todo o trato vocal).'},
    {icon:'⚙️', sys:'lar', h:'Por que é importante', p:'Ao cantar com intensidade/projeção, a pressão subglótica pode aumentar demais — voz dura, pesada, tensa, fadigada, ataques mais duros. O TVSO diminui essa pressão: reduz impacto entre as pregas, melhora ataques duros, aumenta o rendimento vocal.'},
    {icon:'🫧', sys:'lar', h:'Exercício — LAX VOX (tubo na água)', p:'Sopro sonorizado com borbulhas num tubo em garrafa (~500ml). Organiza a pressão do ar, melhora fechamento das pregas, favorece abaixamento da laringe. Protocolo progressivo: sem 1 tubo 3cm/2min; sem 2 tubo 6cm/3min; sem 3+ tubo 9cm/4min (nota e glissando).'},
    {icon:'🥤', sys:'lar', h:'Exercício — Canudo e Palito de pirulito', p:'Canudo de refrigerante: sopro com som de "U", protocolo progressivo de 2 a 4 minutos por semana. Palito de pirulito: tubo rígido (começa com 3 palitos, reduz para 2, depois 1) — gera mais feedback proprioceptivo, mesmo protocolo progressivo.'},
    {icon:'📊', sys:'corpo', h:'Autoavaliação vocal', p:'Sempre: "aaaaa" antes → exercício → "aaaaa" depois, para ouvir a melhora e desenvolver percepção própria. A voz costuma sair mais leve, solta, projetada, com menos esforço. Alteração vocal por mais de 15 dias: procure fonoaudiólogo ou otorrinolaringologista.'}
  ],
  callout:'"Voz boa é voz que funciona bem <strong>por dentro</strong>." Treine com constância e confie no processo.',
  mcqs:[
    {q:'O que caracteriza o Trato Vocal Semi-Ocluído (TVSO)?', opts:['Saída de ar totalmente livre','Saída de ar totalmente bloqueada','Resistência controlada, nem livre nem bloqueada','Ausência total de ar'], correct:2},
    {q:'Qual é a prática de autoavaliação recomendada antes e depois dos exercícios de TVSO?', opts:['Cantar uma escala completa','Emitir um "aaaaa" antes e depois, comparando','Medir o tempo de fonação apenas','Gravar em vídeo obrigatoriamente'], correct:1}
  ],
  openqs:['Por que os exercícios de TVSO reduzem "ataques vocais duros" e a fadiga?']
},
{
  id:'refluxo', title:'Refluxo Laringofaríngeo e a Voz',
  cards:[
    {icon:'🔥', sys:'lar', h:'O que é (fonte: Cleveland Clinic)', p:'Refluxo laringofaríngeo (RLF/LPR) é quando ácido e enzimas do estômago atingem a garganta e a laringe — diferente do refluxo gastroesofágico comum, muitas vezes sem azia perceptível ("refluxo silencioso").'},
    {icon:'🗣️', sys:'lar', h:'Sintomas em cantores', p:'Segundo estudos publicados (PubMed/ScienceDirect), cantores com RLF relatam fadiga vocal, rouquidão, perda de extensão e sensação de "bolo na garganta" — mesmo com voz falada aparentemente normal.'},
    {icon:'⚠️', sys:'corpo', h:'Fatores de risco', p:'Comer tarde da noite, deitar logo após refeições, excesso de cafeína/álcool e alimentos gordurosos aumentam o risco — os mesmos hábitos já citados na aula de Saúde Vocal.'},
    {icon:'🩺', sys:'corpo', h:'Quando buscar tratamento', p:'Rouquidão persistente, perda de alcance vocal ou desconforto que não melhora exigem avaliação otorrinolaringológica — o tratamento costuma combinar mudança de hábitos e, se necessário, medicação.'}
  ],
  callout:'Fonte: Cleveland Clinic e estudos do YO-IFOS Study Group sobre refluxo em cantores.',
  mcqs:[
    {q:'Por que o RLF é chamado de "refluxo silencioso"?', opts:['Porque nunca causa sintomas','Porque pode ocorrer sem a azia típica do refluxo comum','Porque só afeta pessoas idosas','Porque é sempre assintomático e inofensivo'], correct:1},
    {q:'Qual sintoma vocal é frequentemente associado ao RLF em cantores?', opts:['Aumento da extensão vocal','Fadiga vocal e perda de alcance','Melhora da projeção','Não há relação com a voz'], correct:1}
  ],
  openqs:['Compare os fatores de risco do RLF com os hábitos já discutidos na aula de Saúde Vocal — o que se repete?']
},
{
  id:'lesoes', title:'Nódulos, Pólipos e Cistos Vocais',
  cards:[
    {icon:'🔴', sys:'lar', h:'Nódulos (fonte: Cleveland Clinic / ASHA)', p:'Lesões bilaterais, tipo "calo", na junção do terço anterior com o médio da prega vocal — mais comuns em mulheres de 20-50 anos e em quem usa a voz de forma abusiva ou incorreta.'},
    {icon:'🟠', sys:'lar', h:'Pólipos', p:'Geralmente unilaterais, formados a partir do rompimento de um pequeno vaso sanguíneo na prega vocal — o corpo tenta "cicatrizar" e forma o pólipo, que atrapalha o fechamento glótico.'},
    {icon:'🎯', sys:'corpo', h:'Causas comuns', p:'Uso vocal abusivo (gritar, cantar sem técnica), refluxo, tabagismo, infecções respiratórias mal tratadas e desidratação crônica — os mesmos fatores estudados nas aulas de Saúde Vocal.'},
    {icon:'💊', sys:'corpo', h:'Tratamento', p:'Fonoterapia (reabilitação vocal) é a primeira linha para nódulos. Pólipos e cistos costumam responder menos à terapia vocal isolada, podendo exigir cirurgia (microlaringoscopia) em casos persistentes.'}
  ],
  callout:'Fonte: Cleveland Clinic, ASHA e revisão sistemática (PMC10219546) sobre eficácia de tratamentos.',
  mcqs:[
    {q:'Qual a principal diferença entre nódulo e pólipo?', opts:['Não há diferença','Nódulo é bilateral (tipo calo); pólipo geralmente é unilateral, de um vaso rompido','Pólipo é sempre maligno','Nódulo só ocorre em homens'], correct:1},
    {q:'Qual é geralmente a primeira linha de tratamento para nódulos vocais?', opts:['Cirurgia imediata','Fonoterapia (reabilitação vocal)','Repouso vocal absoluto por 6 meses','Não existe tratamento eficaz'], correct:1}
  ],
  openqs:['Por que "usar a voz de forma incorreta" pode ser tão prejudicial quanto "usar demais"?']
}
] },
    { id:4, title:"Afinação", lessons: [
{
  id:'chiaroscuro', title:'Chiaroscuro — Claro e Escuro na Voz',
  cards:[
    {icon:'🎨', sys:'corpo', h:'O que é Chiaroscuro', p:'Termo das artes visuais (chiaro=claro, scuro=escuro). Na voz, é a combinação entre som claro e escuro, dando expressividade, profundidade, emoção e intenção musical. Não é volume nem força — é cor vocal e espaço interno.'},
    {icon:'🦷', sys:'lar', h:'Palato duro e palato mole', p:'Palato duro: do início atrás dos dentes até certo ponto. Palato mole: mais ao fundo, onde fica macio. Imagem do rosto dividido ao meio: da metade para frente = som mais claro; da metade para trás = som mais escuro.'},
    {icon:'🌑', sys:'lar', h:'Som escuro (G fechado)', p:'Elevar o palato mole abaixa a laringe, aumenta o espaço na laringofaringe, dá corpo ao som. Exercício: "G, G, G" fechado (como "â"), sem força/volume — só movimento muscular. Imagens: engolir uma laranja, sensação de bocejo.'},
    {icon:'☀️', sys:'lar', h:'Som claro (K aberto)', p:'Som mais frontal, vibra mais no palato duro, mais brilhante. Exercício: "K, K, K" com "A" bem aberto. Ganha projeção e presença sem aumentar volume, massa de TA ou forçar a voz — isso é economia vocal.'},
    {icon:'⚖️', sys:'corpo', h:'Não existe certo ou errado', p:'Algumas músicas pedem mais escuro, outras mais claro, muitas pedem equilíbrio — você "mistura cores", não troca um botão. No palco: mais escuro = profundidade/dramaticidade; mais claro = presença/leveza — sempre sem forçar ou gritar.'}
  ],
  callout:'"Performance não é volume. <strong>Performance é intenção sonora consciente.</strong>"',
  mcqs:[
    {q:'O que acontece fisiologicamente ao produzir o som "escuro" (G fechado)?', opts:['A laringe sobe e o espaço diminui','O palato mole se eleva, a laringe abaixa e o espaço aumenta','Não há nenhuma mudança física','Apenas o volume aumenta'], correct:1},
    {q:'Como o cantor ganha projeção sem aumentar o volume, segundo o Chiaroscuro?', opts:['Gritando mais forte','Ajustando claro e escuro (cor vocal e espaço interno)','Usando sempre voz de peito','Aumentando a massa de TA'], correct:1}
  ],
  openqs:['Por que "som escuro" não deve ser confundido com "garganta apertada"?']
},
{
  id:'afinacao', title:'Afinação e os Tipos de Desafinação',
  cards:[
    {icon:'🎯', sys:'corpo', h:'O que é afinação', p:'Capacidade de reproduzir exatamente a mesma altura sonora de um som ouvido — afinação acontece por comparação. Se o som produzido não corresponde ao ouvido, ocorre desafinação.'},
    {icon:'👂', sys:'corpo', h:'Ausência de registro sonoro / de semitons', p:'Tipo 1: a pessoa ouve a nota mas não consegue registrá-la internamente (problema perceptivo, não muscular). Tipo 2: dificuldade específica com semitons — a melodia "descola" da harmonia em trechos cromáticos, mesmo com boa afinação geral.'},
    {icon:'💪', sys:'lar', h:'Ausência de ajuste muscular / de foco', p:'Tipo 3: a intenção está correta (ex: deixar a voz mais escura) mas o controle muscular ainda não chega lá. Tipo 4: o cantor é afinado mas perde o foco auditivo durante a performance — atenção toda na interpretação/texto/emoção/público, parando de se ouvir conscientemente.'},
    {icon:'🎭', sys:'lar', h:'Desequilíbrio no chiaroscuro / referência externa', p:'Tipo 5: afinação "chiara" (sempre um pouco acima) ou "scura" (sempre abaixo) — no canto lírico, o brilho leve é proposital (para "passar" sobre a orquestra); no popular não é indicado. Tipo 6: cantar sem se conectar ao que soa fora (piano, banda, playback).'},
    {icon:'✅', sys:'corpo', h:'Conclusão', p:'Desafinação nem sempre é falta de talento — está ligada a percepção auditiva, falta de treino específico, ajustes musculares imprecisos, falta de foco ou de consciência sonora. Todos esses pontos são treináveis.'}
  ],
  callout:'Identificar <strong>qual tipo</strong> de desafinação você tem já é um passo enorme para corrigi-la.',
  mcqs:[
    {q:'Qual tipo de desafinação ocorre quando o cantor "não registra" a nota internamente, mesmo ouvindo-a?', opts:['Ausência de foco durante a performance','Ausência de apreciação musical (registro sonoro)','Desequilíbrio no chiaroscuro','Ausência de referência externa'], correct:1},
    {q:'Por que cantores líricos às vezes afinam propositalmente um pouco acima da nota?', opts:['Por erro de técnica','Porque cantam sem microfone contra uma orquestra e precisam "passar" por cima do som','Porque é mais fácil de cantar assim','Não é verdade, isso nunca acontece'], correct:1}
  ],
  openqs:['Explique a diferença entre "ausência de ajuste muscular" e "ausência de foco" como causas de desafinação.']
},
{
  id:'respiro2', title:'Treino Respiratório — Nível Básico',
  cards:[
    {icon:'🧍', sys:'ar', h:'Postura de apoio', p:'Esterno alto, costas alinhadas (como uma cordinha puxando para cima), leve contração abdominal (umbigo "nas costas"), ombros relaxados. Postura ativa mas confortável — sem tensão, rigidez ou esforço excessivo.'},
    {icon:'1️⃣', sys:'ar', h:'Exercício 1 — Sustentação com "S"', p:'Inspire pelo nariz, solte em S contínuo, corpo estável. Tempo: mulheres mín. 15s, homens mín. 20s — comece com 15s para todos, 3 repetições. Dificuldade pode indicar falta de condicionamento; se persistir, procure um fonoaudiólogo.'},
    {icon:'2️⃣', sys:'ar', h:'Exercício 2 — Staccato respiratório', p:'Solte o ar em pequenos impulsos (o abdômen se move, não o peito) — 3 séries de 10 impulsos. Ativa o diafragma e ganha agilidade no controle do ar.'},
    {icon:'3️⃣', sys:'ar', h:'Exercícios 3 e 4 — Shaker e Respiron', p:'Shaker (se tiver): fortalece musculatura respiratória, 8 repetições, pode ser sentado. Respiron: níveis 0-4 (nesta aula, ficar no Nível 0) — esvazie, inspire pelo aparelho, segure a bolinha o máximo possível, relaxe, repita 10x.'},
    {icon:'5️⃣', sys:'ar', h:'Exercício 5 — Contagem falada com apoio', p:'Inspire, conte em voz falada "1, 2, 3 e 4", controlando a saída do ar sem empurrar a voz, mantendo a postura. Integra respiração + fala, essencial para o canto.'}
  ],
  callout:'"Respiração se constrói com <strong>constância</strong>. Não compare seu tempo com o de outra pessoa."',
  mcqs:[
    {q:'No Exercício 2 (staccato respiratório), o que deve se movimentar?', opts:['O peito','O abdômen','Os ombros','A cabeça'], correct:1},
    {q:'Nesta aula, em qual nível do Respiron o treino deve ficar?', opts:['Nível 4 (máximo)','Nível 2','Nível 0 (básico)','Não usa níveis'], correct:2}
  ],
  openqs:['Se um aluno não consegue chegar aos 15/20 segundos de referência no exercício do "S", o que o material recomenda?']
},
{
  id:'coma', title:'Comas e Afinação — Intervalos Microtonais',
  cards:[
    {icon:'🔬', sys:'corpo', h:'O que são comas', p:'Coma é um intervalo musical muito pequeno dentro de um tom inteiro — de Dó a Ré (1 tom) existem 9 comas, microdivisões menores que o semitom, que não aparecem no teclado mas existem na percepção auditiva e na voz.'},
    {icon:'🎢', sys:'lar', h:'A voz e os comas', p:'A voz é contínua (não fixa como um teclado). Num glissando entre Dó e Ré, a voz percorre os 9 comas. Sem controle desse percurso, o cantor pode parar antes, passar além, ou oscilar dentro dos comas — gerando sensação de desafinação.'},
    {icon:'⬇️', sys:'lar', h:'Afinação calante', p:'Nota cantada fica abaixo da correta — o cantor "não chega" totalmente na nota. Muito perceptível para quem ouve e interpretada como desafinação. Pode ocorrer mesmo com boa voz, se o cantor afinar constantemente para baixo.'},
    {icon:'⬆️', sys:'lar', h:'Afinação brilhante', p:'Nota fica um pouco acima da correta, sem chegar à próxima nota — dentro dos comas. Pode ser usada propositalmente (ex: canto lírico, para "passar" sobre a orquestra), mas quando exagerada também soa desafinada.'},
    {icon:'🎯', sys:'corpo', h:'O objetivo no canto popular', p:'Atingir exatamente a nota tocada/cantada — nem abaixo, nem acima. Afinação não é aproximação: é consciência, controle e escuta refinada.'}
  ],
  callout:'No canto popular, tanto a afinação <strong>calante</strong> quanto a <strong>brilhante exagerada</strong> são desagradáveis — o alvo é a nota exata.',
  mcqs:[
    {q:'Quantos comas existem dentro de um tom inteiro (ex: Dó a Ré)?', opts:['3','9','12','2'], correct:1},
    {q:'O que é "afinação calante"?', opts:['Nota fica acima da correta','Nota fica exatamente correta','Nota fica abaixo da correta','Não existe esse termo'], correct:2}
  ],
  openqs:['Por que, no canto popular (diferente do lírico), não é indicado afinar sempre um pouco acima da nota?']
},
{
  id:'semitom1', title:'Semitons — Parte 1: Teoria',
  cards:[
    {icon:'🎹', sys:'corpo', h:'O que é semitom', p:'Menor intervalo musical do sistema temperado — entre duas notas naturais consecutivas existe uma nota intermediária (tecla preta no teclado). Ex: Dó→Dó# = 1 semitom; Dó→Ré = 1 tom (2 semitons). Dó# e Réb são a mesma nota, com nomes diferentes conforme o contexto.'},
    {icon:'🎯', sys:'lar', h:'Por que o semitom é difícil no canto', p:'Exige coordenação motora fina da musculatura da laringe: o deslocamento entre as notas é muito pequeno, a prega vocal precisa encurtar/alongar num movimento mínimo, e qualquer excesso ou falta de ajuste gera desafinação.'},
    {icon:'🔗', sys:'corpo', h:'Relação entre semitons e afinação', p:'Um dos motivos mais comuns de desafinação: o cantor acerta notas distantes e mantém boa afinação geral, mas erra exatamente nos trechos com semitons — comum em movimentos cromáticos, e totalmente treinável.'},
    {icon:'👂', sys:'corpo', h:'Princípio do treino', p:'Objetivo: educar o ouvido, refinar a escuta, desenvolver controle muscular preciso. Durante os exercícios: ouvir a nota tocada, ouvir o som da própria voz, comparar os dois, ajustar até ficarem exatamente iguais.'}
  ],
  callout:'O semitom exige <strong>precisão extrema</strong> — movimentos maiores da musculatura vocal são, paradoxalmente, mais fáceis de acertar.',
  mcqs:[
    {q:'Quantos semitons formam um tom inteiro (ex: Dó a Ré)?', opts:['1','2','3','4'], correct:1},
    {q:'Por que o semitom é fisiologicamente mais difícil que intervalos maiores?', opts:['Porque exige mais ar','Porque exige um movimento mínimo e muito preciso da musculatura laríngea','Porque usa outro registro vocal','Não é mais difícil, é só impressão'], correct:1}
  ],
  openqs:['Descreva o processo de "ouvir, reproduzir e comparar" recomendado para treinar semitons.']
},
{
  id:'semitom2', title:'Semitons — Parte 2: Exercícios Práticos',
  cards:[
    {icon:'1️⃣', sys:'lar', h:'Exercício 1 — Duas notas', p:'Escolha um tom confortável (ex: Dó→Dó#). Ouça as duas notas tocadas, reproduza vocalmente, suba e desça mantendo o movimento curto e preciso. Homens podem cantar uma oitava abaixo; execute lentamente.'},
    {icon:'2️⃣', sys:'lar', h:'Exercício 2 — Três notas', p:'Depois de estabilizar duas notas, acrescente uma terceira: execute três notas consecutivas em semitons, suba e desça mantendo controle, depois suba o exercício meio tom acima e repita.'},
    {icon:'3️⃣', sys:'lar', h:'Exercício 3 — Ampliação gradual', p:'Com o avanço, trabalhe com 4 ou 5 notas, sempre em intervalos de semitom, sem "pular degraus" — a lógica é não subir o tom inteiro de uma vez, trabalhando só os pequenos deslocamentos até chegar à nota seguinte com total controle.'},
    {icon:'🗣️', sys:'corpo', h:'Vogais no treino', p:'As vogais podem variar (A, E, I, O, U) sem interferir no objetivo — o foco não é qualidade vocal, é precisão de altura, coordenação e afinação. Ex: Lá–Lá#–Lá repetido com vogais diferentes.'},
    {icon:'⚠️', sys:'lar', h:'Escorregadas durante o treino', p:'Podem acontecer — geralmente quando o cantor não escuta a próxima nota antes de cantar, ou tenta "ir no impulso" sem referência auditiva. Quando ocorrer: repita o exercício e volte a ouvir as notas antes de cantar.'}
  ],
  callout:'Progressão sempre gradual: <strong>2 notas → 3 notas → 4-5 notas</strong>, nunca pulando etapas.',
  mcqs:[
    {q:'O que fazer quando ocorre uma "escorregada" durante o treino de semitons?', opts:['Ignorar e continuar adiante','Repetir o exercício e voltar a ouvir as notas antes de cantar','Parar de treinar semitons','Aumentar a velocidade'], correct:1},
    {q:'Qual é a lógica da "ampliação gradual" (Exercício 3)?', opts:['Subir o tom inteiro de uma vez','Trabalhar apenas os pequenos deslocamentos de semitom, sem pular degraus','Cantar cada vez mais rápido','Trocar de vogal a cada nota'], correct:1}
  ],
  openqs:['Por que variar as vogais (A, E, I, O, U) não muda o objetivo do treino de semitons?']
},
{
  id:'intervalos', title:'Intervalos Musicais',
  cards:[
    {icon:'📏', sys:'corpo', h:'O que é intervalo', p:'Diferença de altura entre dois sons. No canto, a vocalização acontece por movimentos da laringe: curtos para intervalos menores, mais longos para intervalos maiores — quanto maior a distância entre notas, maior o ajuste e deslocamento muscular necessário.'},
    {icon:'1️⃣', sys:'lar', h:'Exercício 1 — Intervalo com 2 notas', p:'Sequência base: Dó–Mi–Dó (e variações). Depois de confortável, suba o tom e repita. Variação com vogais A/E/I/O/U — cada vogal exige abertura de boca diferente, treinando articulação e mantendo o intervalo afinado.'},
    {icon:'2️⃣', sys:'lar', h:'Exercício 2 — Intervalo com 3 notas', p:'Sequência base: Dó–Mi–Sol–Mi–Dó, cantando com notas, vogais ou sílabas (ma/la/na). Suba o tom e repita o vocalize completo — quanto mais sobe, mais atenção à articulação, clareza de vogais e precisão do salto.'},
    {icon:'3️⃣', sys:'corpo', h:'Exercício 3 — Escada de intervalos', p:'A partir do Dó: Dó-Ré, Dó-Mi, Dó-Fá, Dó-Sol, Dó-Lá, Dó-Si, Dó-Dó(oitava) — subindo e depois descendo. Método em 3 etapas: ouvir a referência → fazer com vogais → fazer cantando as notas.'},
    {icon:'💨', sys:'ar', h:'Respiração e estratégia', p:'Aproveite os exercícios para trabalhar respiração: se não conseguir a escala inteira, faça por partes, aumente a extensão aos poucos. Use o apoio sem "jogar ar demais", não use a reserva de ar, mantenha economia vocal sem força.'}
  ],
  callout:'Quanto mais controle de <strong>laringe + ouvido + articulação</strong>, mais afinado você fica no intervalo.',
  mcqs:[
    {q:'Segundo o material, o que acontece quanto maior a distância entre duas notas?', opts:['Menor o ajuste necessário na laringe','Maior o ajuste de altura e deslocamento muscular necessário','Não há relação nenhuma','A voz sempre desafina'], correct:1},
    {q:'Qual é a ordem do "método em 3 etapas" para a escada de intervalos?', opts:['Cantar, ouvir, repetir','Ouvir a referência → fazer com vogais → cantar as notas','Cantar as notas → ouvir → vogais','Vogais → cantar → ouvir'], correct:1}
  ],
  openqs:['Por que variar vogais e sílabas nos exercícios de intervalo ajuda a manter a afinação mesmo quando a boca muda?']
},
{
  id:'ouvido', title:'Treino de Ouvido: Absoluto x Relativo',
  cards:[
    {icon:'🎯', sys:'corpo', h:'Ouvido absoluto x relativo', p:'Ouvido absoluto (raro, parcialmente genético) identifica uma nota isolada sem referência. Ouvido relativo (treinável por qualquer pessoa) identifica a distância entre notas — é esse que sustenta afinação, solfejo e intervalos.'},
    {icon:'📈', sys:'corpo', h:'Por que treinar o relativo', p:'A grande maioria dos músicos profissionais usa ouvido relativo. Ele é suficiente (e às vezes até mais prático) para cantar afinado, harmonizar e improvisar.'},
    {icon:'🎵', sys:'corpo', h:'Método de referência por músicas', p:'Associe cada intervalo a uma música conhecida (ex: 2ª maior = "Parabéns pra Você"; 5ª justa = tema de Star Wars) — cria uma "cola mental" auditiva para reconhecer intervalos rapidamente.'},
    {icon:'🔗', sys:'corpo', h:'Conexão com solfejo e afinação', p:'O treino de ouvido relativo é a base científica por trás dos exercícios de solfejo (Módulo 5) e de intervalos/semitons (Módulo 4) — quanto mais você pratica, mais rápido o cérebro reconhece o intervalo antes mesmo de cantar.'}
  ],
  callout:'Ouvido absoluto é <strong>raridade</strong>; ouvido relativo é <strong>treino</strong> — e é o que realmente sustenta um bom cantor.',
  mcqs:[
    {q:'Qual tipo de ouvido a maioria dos músicos profissionais utiliza no dia a dia?', opts:['Ouvido absoluto','Ouvido relativo','Nenhum dos dois','Apenas leitura de partitura'], correct:1},
    {q:'Qual é a ideia do "método de referência por músicas conhecidas"?', opts:['Decorar partituras inteiras','Associar cada intervalo a uma música conhecida para reconhecê-lo de ouvido','Substituir o solfejo','Treinar apenas com instrumentos'], correct:1}
  ],
  openqs:['Escolha um intervalo (ex: 4ª justa) e associe a uma música que te ajude a lembrá-lo.']
}
] },
    { id:5, title:"Musicalidade", lessons: [
{
  id:'solfejo1', title:'Solfejo — Parte 1: Leitura e Fundamentos',
  cards:[
    {icon:'🎼', sys:'corpo', h:'O que é solfejo', p:'Prática de ler uma sequência musical escrita e executá-la com a voz, usando nome das notas (dó-ré-mi...) ou números/graus. Une leitura musical, afinação, percepção auditiva, memória melódica e controle vocal — não é exclusivo de músicos avançados, é parte fundamental da formação vocal.'},
    {icon:'🎹', sys:'corpo', h:'Importância do instrumento', p:'O contato com teclado/piano oferece referência clara de afinação, ajuda a conferir alturas/intervalos e constrói memória auditiva. Não precisa domínio avançado: basta localizar notas, tocar sequências simples e conferir exercícios. Sem teclado físico: use piano virtual/app.'},
    {icon:'👂', sys:'corpo', h:'Solfejo sem partitura (consciência auditiva)', p:'Antes da leitura formal: escolha uma tonalidade, cante a escala (Dó-Ré-Mi-Fá-Sol) ouvindo o piano, depois repita sem o piano usando só a memória. Desenvolve previsão melódica, consciência de intervalo e autonomia vocal.'},
    {icon:'📖', sys:'corpo', h:'Solfejo com partitura', p:'Etapa 1 (com apoio do piano): toque as notas, cante nomeando-as, respeite o ritmo, observe pausas. Etapa 2 (sem apoio): toque só a primeira nota, cante todo o solfejo lendo a partitura, confira no piano ao final.'},
    {icon:'⏱️', sys:'corpo', h:'Ritmo no solfejo', p:'Não se canta livremente — cada nota respeita valor rítmico, compasso e pausas. Mesmo para iniciantes, a leitura rítmica é essencial para organização musical, segurança na execução e preparo para canto coletivo.'}
  ],
  callout:'O solfejo transforma o cantor em um <strong>músico mais consciente, afinado e independente</strong>.',
  mcqs:[
    {q:'Qual é o papel do teclado/piano no estudo de solfejo?', opts:['Não tem utilidade nenhuma','Oferece referência de afinação e ajuda a construir memória auditiva','Serve apenas para acompanhar shows','É obrigatório ter domínio avançado dele'], correct:1},
    {q:'No solfejo, além da altura das notas, o que também deve ser respeitado?', opts:['Apenas o volume da voz','O valor rítmico, o compasso e as pausas','A cor da roupa do cantor','Nada além da melodia'], correct:1}
  ],
  openqs:['Por que a leitura rítmica é considerada essencial mesmo para cantores iniciantes?']
},
{
  id:'solfejo2', title:'Solfejo — Parte 2: Intervalos, Melisma e Prática',
  cards:[
    {icon:'🔗', sys:'corpo', h:'Solfejo, intervalos e melisma', p:'O solfejo trabalha diretamente os intervalos (movimentos conjuntos e saltos melódicos). Melismas são construídos sobre escalas e intervalos — quem não domina solfejo tem mais dificuldade em executar melismas com precisão e manter afinação em passagens rápidas.'},
    {icon:'✏️', sys:'corpo', h:'Criação de solfejos', p:'O cantor pode e deve criar seus próprios solfejos: usando diferentes notas iniciais, variando sequências, aumentando gradualmente a dificuldade. Ex: iniciar em Mi-Ré-Fá-Mi-Dó, ou partir de outros graus da escala.'},
    {icon:'📋', sys:'corpo', h:'Prática recomendada', p:'Praticar diariamente, alternando solfejo com piano e sem piano. Pode escrever o nome das notas no início, se necessário, abandonando gradualmente essa ajuda visual. Repetir em diferentes tonalidades — o progresso vem de repetição consciente, não de pressa.'},
    {icon:'🎯', sys:'corpo', h:'Conclusão', p:'O solfejo é pilar da formação vocal: transforma o cantor em músico mais consciente, afinado e independente. Não é apenas técnica, é treino de escuta, leitura e coordenação vocal que sustenta toda a evolução musical.'}
  ],
  callout:'Quem não domina solfejo tende a ter <strong>mais dificuldade com melismas</strong> e afinação em passagens rápidas.',
  mcqs:[
    {q:'Por que o domínio do solfejo ajuda diretamente na execução de melismas?', opts:['Não tem relação nenhuma','Porque melismas são construídos sobre escalas e intervalos que o solfejo treina','Porque melisma é um tipo de solfejo','Porque solfejo substitui o melisma'], correct:1},
    {q:'Qual é a recomendação de prática para evoluir no solfejo?', opts:['Praticar só uma vez por semana','Praticar diariamente, alternando com e sem piano, em tonalidades diferentes','Praticar apenas com partitura','Memorizar sem nunca repetir'], correct:1}
  ],
  openqs:['Dê um exemplo de como você criaria seu próprio solfejo, variando nota inicial e dificuldade.']
},
{
  id:'apogiatura', title:'Apogiatura',
  cards:[
    {icon:'✨', sys:'corpo', h:'O que é apogiatura', p:'Ornamento vocal que embeleza frases e enriquece a interpretação. Acrescenta-se uma nota vizinha à nota principal e retorna-se imediatamente à nota fundamental (a que já estava sendo cantada).'},
    {icon:'↕️', sys:'lar', h:'Tipos: ascendente e descendente', p:'Ascendente: acrescenta nota acima, retorna à original (ex: Dó–Dó#–Dó). Descendente: acrescenta nota abaixo, retorna à original (ex: Dó–Sib–Dó). A escolha entre elas é musical e interpretativa.'},
    {icon:'🐢', sys:'corpo', h:'Regra de ouro: sempre lenta primeiro', p:'Treine sempre devagar antes de acelerar — nunca comece rápido. Progressão: 1) ascendente lenta, 2) descendente lenta, 3) ascendente+descendente combinadas lentas, 4) mesma combinação rápida (só depois de limpa e afinada). Todos os exercícios com as 5 vogais.'},
    {icon:'⚠️', sys:'corpo', h:'Cuidado com excessos', p:'Usada o tempo inteiro, cansa quem ouve, tira o impacto musical e pode virar vício vocal. Deve ser pensada, escolhida e aplicada com objetivo claro — escolha os pontos antes de cantar e memorize-os.'}
  ],
  callout:'"Menos é mais. <strong>E sempre com intenção musical.</strong>"',
  mcqs:[
    {q:'O que caracteriza a apogiatura ascendente?', opts:['Acrescenta nota abaixo e retorna à original','Acrescenta nota acima da principal e retorna imediatamente à original','Não retorna à nota original','É sempre feita rápido'], correct:1},
    {q:'Qual é a regra de ouro para treinar apogiatura?', opts:['Sempre começar rápido para ganhar tempo','Sempre treinar lento primeiro, acelerando só depois de seguro e afinado','Só treinar com uma vogal','Nunca usar mais de uma vez por música'], correct:1}
  ],
  openqs:['Por que usar apogiatura "o tempo inteiro" numa música é considerado um erro, segundo o material?']
},
{
  id:'melisma', title:'Melisma',
  cards:[
    {icon:'🪜', sys:'corpo', h:'O que é melisma', p:'Ornamento vocal onde se canta várias notas diferentes sobre a mesma vogal/sílaba, formando uma "escadinha melódica" que sobe, desce ou pula notas — sempre respeitando a harmonia da música (senão soa desafinado).'},
    {icon:'🎵', sys:'lar', h:'Base do treino: escala pentatônica', p:'Escala de 5 notas, versátil e segura harmonicamente. Pentatônica maior (Dó maior): Dó-Ré-Mi-Sol-Lá (retira Fá e Si da escala completa). Pentatônica menor: mesma notas, começando no Lá (relativa menor).'},
    {icon:'⏱️', sys:'corpo', h:'Treino com metrônomo', p:'Comece em 100 BPM, aumente progressivamente até 130 BPM. Se 130 estiver difícil, volte o BPM — não avance sem controle. Treine sempre com as 5 vogais, do grave para o agudo E do agudo para o grave.'},
    {icon:'💡', sys:'corpo', h:'Cinco dicas finais', p:'1) Comece sempre lento e acelere depois. 2) Grave-se para corrigir erros. 3) Respeite a harmonia (fora do acorde não funciona). 4) Não exagere (cansa quem ouve). 5) Persistência — melisma não é dom, é técnica construída com treino.'}
  ],
  callout:'"Não existe melisma <strong>\'natural\' sem treino.</strong> Existe melisma treinado."',
  mcqs:[
    {q:'Quantas notas tem a escala pentatônica usada como base do treino de melisma?', opts:['3','5','7','8'], correct:1},
    {q:'O que acontece se um melisma sair fora da harmonia (acorde) do momento da música?', opts:['Soa ainda melhor','Não faz diferença nenhuma','Pode soar desafinado','É sempre a forma correta de fazer'], correct:2}
  ],
  openqs:['Por que o metrônomo é uma ferramenta importante no treino de melisma?']
},
{
  id:'vibrato', title:'Vibrato',
  cards:[
    {icon:'〰️', sys:'lar', h:'O que é vibrato', p:'Oscilação na frequência ou intensidade da voz, resultado do equilíbrio entre fluxo de ar, resistência muscular das pregas vocais e liberdade do abdômen se mover sem tensão. É uma das últimas técnicas ensinadas, pois exige musculatura já preparada.'},
    {icon:'🎭', sys:'lar', h:'Três tipos de vibrato', p:'Laríngeo: oscilação da laringe e das notas. Diafragmático: pulos de ar/movimento do diafragma (enfatiza o texto). Misto: união dos dois. Também existem desvios: wobble (lento, balanço largo) e trêmulo (tremidinha curta) — geralmente sinal de compensação muscular (laringe alta/baixa, abdômen rígido, língua tensa).'},
    {icon:'🎯', sys:'corpo', h:'Alvo do vibrato ideal', p:'Oscilação regular, nem lenta nem rápida demais, som estável sem tremor, sensação de leveza e liberdade. Surge como resultado natural do equilíbrio corporal — não deve ser "fabricado" à força.'},
    {icon:'🏋️', sys:'ar', h:'Treino do vibrato diafragmático', p:'Exercício "Rá" em nota única, 5 repetições estacadas. Depois vogal "A" em duas velocidades, subindo a escala de meio em meio tom (5x, depois 9x). Aplicação em frase: vibrato no final de uma palavra, aumentando a velocidade aos poucos — no início pode parecer mecânico, isso é normal.'},
    {icon:'🎨', sys:'corpo', h:'Critério artístico de uso', p:'Vibrato é recurso de expressão, não obrigação — em alguns estilos, menos vibrato soa mais moderno. O cantor precisa aprender quando usar, quanto usar e quando não usar. Se sentir aperto na garganta ou cansaço rápido, é sinal de parar e reorganizar a técnica.'}
  ],
  callout:'"Vibrato não é <strong>força</strong>, é <strong>coordenação</strong>." Vibrato saudável nunca vem com esforço.',
  mcqs:[
    {q:'O que indica que um vibrato do tipo "wobble" ou "trêmulo" pode ter compensações musculares?', opts:['É sempre assim que deve soar','Sinal de laringe alta/baixa, abdômen rígido ou língua tensa','Significa excesso de treino','Não indica nada'], correct:1},
    {q:'Qual é o critério para saber se deve usar vibrato numa música?', opts:['Usar sempre, em toda nota longa','É um recurso de expressão — depende do estilo e da intenção artística','É obrigatório em todas as frases finais','Nunca deve ser usado no canto popular'], correct:1}
  ],
  openqs:['Por que o vibrato é uma das últimas técnicas ensinadas no curso, e não uma das primeiras?']
},
{
  id:'estilos', title:'Estilos Vocais e Adaptação Interpretativa',
  cards:[
    {icon:'🎨', sys:'corpo', h:'Técnica a serviço do estilo', p:'A mesma base técnica (respiração, registros, ressonância) se adapta de formas diferentes conforme o estilo musical — não existe "um jeito certo" único de cantar, existe adequação ao contexto.'},
    {icon:'🙏', sys:'lar', h:'Gospel e Worship', p:'Costuma explorar Belting e Soul Belting com forte apelo emocional, melismas frequentes e dinâmica de intensidade crescente — technique-heavy em improviso e ornamentação.'},
    {icon:'🎸', sys:'lar', h:'Pop e Rock', p:'Pop tende a usar Speaking e Cover Belting (naturalidade, clareza de texto); Rock explora mais compressão e ataques duros controlados, com cuidado redobrado de saúde vocal pelo volume/intensidade.'},
    {icon:'🎻', sys:'lar', h:'MPB e Sertanejo', p:'MPB valoriza nuance, dinâmica suave e articulação impecável (twang discreto); Sertanejo frequentemente usa Peer Belting/Cover Belting para o característico "choro" e brilho vocal na melodia.'}
  ],
  callout:'Adaptar-se ao estilo é usar o <strong>mesmo repertório técnico</strong> com pesos e combinações diferentes.',
  mcqs:[
    {q:'O que muda entre os estilos musicais, segundo esta aula?', opts:['A anatomia da laringe do cantor','A combinação e o peso dado a cada técnica já aprendida','As leis da física do som','Nada muda, a técnica é idêntica sempre'], correct:1},
    {q:'Qual sub-registro é mais associado ao "choro" característico do sertanejo?', opts:['Sub-registro de Peito','Peer Belting / Cover Belting','Top Voice','Vocal fry'], correct:1}
  ],
  openqs:['Escolha um estilo musical do seu interesse e descreva quais técnicas do curso mais se aplicam a ele.']
}
] },
    { id:6, title:"Sub-registros do Belting", lessons: [
{
  id:'peito', title:'Sub-registro Peito / Sub-grave',
  cards:[
    {icon:'🎚️', sys:'lar', h:'Definição e extensão', p:'Mulheres: "registro de peito", até a nota Sol3. Homens: "sub-grave", até aproximadamente Láb2. Ultrapassar esse limite exige muita massa de TA e traz risco de lesão — por isso o trabalho fica sempre na região grave.'},
    {icon:'💪', sys:'lar', h:'Musculatura e borda', p:'Musculatura predominante: TA (tireoaritenóideo). Borda utilizada: densa. Fechamento mais intenso das pregas (não é força, apenas mais contato). Laringe mais baixa (registro grave); ressonância predominante laringobucofaríngea.'},
    {icon:'📣', sys:'corpo', h:'Calling: YO (grave)', p:'Vocalize: YO – YO YO YO, sempre grave (nunca agudo). Se ficar muito grave, é seu limite; se conseguir descer mais, desça. Ao subir a melodia um pouco, diminua a massa de TA para evitar esforço e lesão; ao voltar ao grave, retome o sub-registro.'},
    {icon:'⚠️', sys:'lar', h:'Alerta final', p:'Nunca suba com voz de peito para regiões médio-agudas — pode machucar a voz, gerar lesões e dificultar a subida para outros registros depois. Sempre respeite limite de altura, sensação corporal e uso correto do calling.'}
  ],
  callout:'Sensação correta: <strong>peito vibrando, voz encorpada, sem esforço.</strong>',
  mcqs:[
    {q:'Até qual nota, aproximadamente, vai o registro de peito nas mulheres?', opts:['Dó4','Sol3','Lá4','Mi3'], correct:1},
    {q:'Por que não se deve subir com voz de peito para regiões médio-agudas?', opts:['Porque soa feio apenas','Porque usa muita massa de TA e há risco de lesão vocal','Porque é proibido por lei','Não há nenhum risco real'], correct:1}
  ],
  openqs:['O que o cantor deve fazer quando a melodia começa a subir enquanto ele está no sub-registro de peito?']
},
{
  id:'soulbelting', title:'Soul Belting / Voz Plena',
  cards:[
    {icon:'🎚️', sys:'lar', h:'Características gerais', p:'Soul Belting (mulheres) / Voz Plena (homens): continua com borda densa e músculo TA predominante. Fechamento de pregas mais regular, laringe médio-baixa, ressonância predominante orofaringe (cavidade oral).'},
    {icon:'📣', sys:'corpo', h:'Calling: UOU', p:'Boca bem aberta, céu da boca elevado, som um pouco mais escuro. Sequência: calling (UOU) → entra no vocalize, subindo aos poucos. "Top Belting": diminuir a massa de TA perto de Sol/Lá para conseguir continuar subindo sem perder força perceptível.'},
    {icon:'🧍', sys:'ar', h:'Apoio e contra-apoio', p:'Apoio: esterno alto, umbigo nas costas, costelas abertas, sem força. Contra-apoio (técnica nova): na nota mais aguda e difícil, leva a barriga um pouquinho mais para dentro — ajuste sutil, não força, que estabiliza a nota.'},
    {icon:'🗣️', sys:'lar', h:'Vogais no vocalize', p:'O: mais vertical, pode dificultar ao subir — use "boca de A, som de O". A: abre mais a boca, facilita a subida. E: cuidado para não fechar a boca nem subir a laringe. I: vogal mais nasal — cuidado para a laringe não subir; pense num "I com fundo de O", mais escuro.'}
  ],
  callout:'"Para quem escuta, quase não muda nada. <strong>Para quem canta, a diferença é enorme.</strong>" (sobre diminuir a massa de TA)',
  mcqs:[
    {q:'Qual é o calling do Soul Belting / Voz Plena?', opts:['YO','UOU','UENHA','IÁ'], correct:1},
    {q:'O que é o "contra-apoio"?', opts:['Parar de respirar durante a nota','Levar a barriga um pouco mais para dentro na nota aguda, para estabilizar','Abrir totalmente a boca','Abaixar drasticamente a laringe'], correct:1}
  ],
  openqs:['Por que a vogal "I" exige cuidado especial nesse sub-registro?']
},
{
  id:'peerbelting', title:'Peer Belting',
  cards:[
    {icon:'🎚️', sys:'lar', h:'Características', p:'Registro médio, equilíbrio muscular com TA predominante, borda densa. Característica principal: som mais metálico, porque a ressonância predominante é a rino-faringe (jogar o som para o "nariz" ganha brilho) — não é um nasal "feio", é frontal e brilhante (conceito de "twang").'},
    {icon:'📣', sys:'corpo', h:'Calling: UENHA', p:'UENHA, UENHA, UENHA... A voz fica mais "nasalzinha" no sentido de mais frontal e metálica, mas de forma positiva. Depois do calling, entra no vocalize mantendo a mesma sensação.'},
    {icon:'📈', sys:'lar', h:'Extensão e ajuste ao subir', p:'Chega a aproximadamente Dó#4. Para subir sem quebrar: diminuir a pressão subglótica, diminuir o sopro (a voz não sobe tão pesada) e diminuir a massa de TA — a prega fica mais "espichadinha", com mais flexibilidade para alongar.'}
  ],
  callout:'Pense sempre na <strong>cavidade nasal/frontal</strong> e no brilho/metal (twang) desse sub-registro.',
  mcqs:[
    {q:'Por que o Peer Belting soa mais metálico?', opts:['Por usar mais volume','Porque a ressonância predominante é a rino-faringe','Porque usa borda tênue','Porque a laringe desce muito'], correct:1},
    {q:'O que ajuda o cantor a subir sem "quebrar" a voz neste sub-registro?', opts:['Aumentar a pressão subglótica','Diminuir sopro e massa de TA, reduzindo a pressão subglótica','Cantar mais alto e forte','Fechar totalmente a boca'], correct:1}
  ],
  openqs:['O que significa "twang" e como ele se relaciona com o Peer Belting?']
},
{
  id:'coverbelting', title:'Cover Belting',
  cards:[
    {icon:'🎚️', sys:'lar', h:'Características', p:'Registro médio, equilíbrio TA/CT com predominância de TA (borda densa), próximo da região de fala — "belting coberto". Extensão até aproximadamente Dó#4. Cobertura maior vertical dentro da boca.'},
    {icon:'⬇️', sys:'lar', h:'Abaixamento de laringe', p:'A laringe fica mais baixa, favorecendo fechamento mais regular das pregas — cria mais espaço na laringofaringe, faz a voz crescer, deixa o som mais amplo e melhora a projeção. Recomenda-se ter feito a aula específica de abaixamento de laringe antes.'},
    {icon:'🔊', sys:'lar', h:'Ressonância e calling', p:'Duas ressonâncias predominantes: rino + laringofaringe (frontal + profunda), combinação que ocorre por causa da laringe mais baixa. Calling: UINHA, UINHA, UINHA — repare a laringe mais baixa e o som mais coberto.'},
    {icon:'⚠️', sys:'lar', h:'Cuidado com a massa', p:'Não subir com muita massa de TA — risco de se machucar. Fundamental poupar a voz, controlar a massa e respeitar o limite. Estratégia de estudo: vocalize com calling → escolher música → cantar só vocalizando (sem letra) → depois inserir vogais e só por último a letra.'}
  ],
  callout:'"Não posso subir com <strong>muita massa</strong>. Se subir com muita massa, você pode se machucar."',
  mcqs:[
    {q:'O que caracteriza o Cover Belting em relação à posição da laringe?', opts:['Laringe muito alta','Laringe mais baixa, criando mais espaço na laringofaringe','Laringe neutra sem alteração','Não há relação com a laringe'], correct:1},
    {q:'Qual é o calling do Cover Belting?', opts:['YO','UOU','UINHA','IÓ'], correct:2}
  ],
  openqs:['Por que é recomendável ter feito a aula de "Abaixamento de Laringe" antes de treinar o Cover Belting?']
},
{
  id:'speaking', title:'Speaking',
  cards:[
    {icon:'🎚️', sys:'lar', h:'Características', p:'Registro médio, com predominância do CT (prega mais esticada/alongada/fina) — por isso usa borda tênue (troca em relação aos sub-registros anteriores, que eram de borda densa). Laringe em posição média, ressonância oro + rino.'},
    {icon:'😌', sys:'corpo', h:'Por que é confortável', p:'CT é músculo de resistência: dá para cantar uma música inteira sem cansar fácil. Em troca, tem menos potência, timbre mais doce/suave — mas muito bonito e agradável de ouvir e cantar. Traz muita inteligibilidade ao texto (palavra clara).'},
    {icon:'📣', sys:'corpo', h:'Calling: IÓ (não IÁ)', p:'Atenção ao detalhe da vogal: não é "IÁ", é "IÓ" (um A mais fechadinho, "com chapeuzinho"). Serve para meninos e meninas igualmente. Vocalize: IÓ-IÓ-IÓ-IÓ numa nota média.'},
    {icon:'🔀', sys:'lar', h:'Transição entre sub-registros', p:'Exercício: começar no belting (borda densa), subir, transitar para o Speaking (borda tênue), e na descida manter o Speaking até os graves — treina a troca de bordas, minimiza o "clique" vocal e reduz a quebra da voz.'}
  ],
  callout:'"Não tenha medo da <strong>borda tênue</strong> — ela permite cantar mais agudo, com menos esforço e mais conforto."',
  mcqs:[
    {q:'Qual é o calling correto do sub-registro Speaking?', opts:['IÁ','IÓ','UOU','YO'], correct:1},
    {q:'Por que o Speaking é considerado confortável de cantar por longos períodos?', opts:['Porque usa muita massa de TA','Porque o CT é um músculo de resistência que não cansa fácil','Porque não envolve as pregas vocais','Porque é sempre cantado em falsete'], correct:1}
  ],
  openqs:['Por que muitas pessoas "não estão acostumadas" a cantar em Speaking, segundo o material — e o que fazer a respeito?']
},
{
  id:'healthbelting', title:'Health Belting',
  cards:[
    {icon:'🎚️', sys:'lar', h:'O que é', p:'"Belting Saudável": permite potência vocal grande em região muito aguda (até ~Sol4) com conforto. Timbre bem metálico, parecido com o Pure Belting — mas fisiologicamente diferente.'},
    {icon:'⚖️', sys:'lar', h:'Health Belting x Pure Belting', p:'Pure Belting: predominância do TA, borda densa. Health Belting: predominância do CT, borda tênue — prega mais alongada e fina, trabalho muscular principal do CT (por isso mais "saudável" em agudos).'},
    {icon:'📣', sys:'corpo', h:'Calling: IÁ (A bem aberto)', p:'A com acento agudo, boca precisa ficar bem grande — se a boca não abrir, o sub-registro não aciona corretamente. Passo a passo: calling IÁ → subir e descer no vocalize mantendo metal, borda tênue, boca aberta e conforto vocal.'},
    {icon:'✅', sys:'corpo', h:'Por que treinar', p:'Ajuda a cantar agudos com potência mantendo conforto, evitando lesões — resolve o "minha voz fica fraca no agudo" na maioria dos casos, pois geralmente falta o sub-registro correto, não força.'}
  ],
  callout:'A laringe fica um pouco mais alta (região aguda), mas <strong>sem peso, sem pressão excessiva, sem tensão</strong>.',
  mcqs:[
    {q:'Qual é a principal diferença muscular entre Health Belting e Pure Belting?', opts:['Não há diferença nenhuma','Health Belting usa predominância de CT (borda tênue); Pure Belting usa TA (borda densa)','Pure Belting não existe','Health Belting só serve para vozes masculinas'], correct:1},
    {q:'O que geralmente falta quando um aluno diz "minha voz fica fraca no agudo"?', opts:['Mais volume','O sub-registro correto para aquela região','Mais respiração apenas','Um microfone melhor'], correct:1}
  ],
  openqs:['Por que o nome "Health" (saudável) faz sentido para descrever este sub-registro?']
},
{
  id:'topvoice', title:'Top Voice / Falsete',
  cards:[
    {icon:'🎚️', sys:'lar', h:'O que é Top Voice', p:'Último sub-registro do belting contemporâneo — inicia quando a voz de cabeça deixa de ficar falada. Usado em legit voices e musicais mais antigos; não é lírico nem belting tradicional, fica no meio-termo: leve, suave, claro. Extensão: até aproximadamente Dó#5.'},
    {icon:'💪', sys:'lar', h:'Musculatura e borda', p:'Predominância do CT: prega mais alongada, fina, com menos massa vibrando → borda tênue. Laringe em posição média (nem baixa nem alta). Emissão leve e confortável, ressonância predominante rinofaríngea (timbre mais leve, doce e suave).'},
    {icon:'📣', sys:'corpo', h:'Calling e vocalize', p:'Calling pensado antes de cantar, focado em leveza, suavidade, borda tênue e conforto. Durante o vocalize: pense no calling, mantenha leveza, não force, deixe a voz fluir. Importante: meninos também devem treinar — não é exclusivo da voz feminina.'},
    {icon:'✅', sys:'corpo', h:'Sensações corretas', p:'Conforto extremo, facilidade para subir, ausência de tensão, som leve e estável. Estratégia de estudo (igual aos outros sub-registros): vocalize → escolher música → vocalizar a música inteira → trabalhar trechos difíceis com uma vogal → explorar todas as vogais → só depois inserir a letra.'}
  ],
  callout:'"É um sub-registro <strong>muito gostoso de cantar</strong>" — se não estiver confortável, algo no ajuste está errado.',
  mcqs:[
    {q:'Até qual nota, aproximadamente, o Top Voice permite chegar com conforto?', opts:['Sol3','Dó#4','Dó#5','Sol5'], correct:2},
    {q:'O Top Voice é exclusivo de qual gênero vocal?', opts:['Apenas vozes femininas','Apenas vozes masculinas','Não é exclusivo — meninos também devem treinar','Apenas cantores líricos'], correct:2}
  ],
  openqs:['Que sensações indicam que o Top Voice está sendo executado corretamente?']
},
{
  id:'organizacao', title:'Organização do Tempo de Estudo',
  cards:[
    {icon:'🗓️', sys:'corpo', h:'Organização é individual', p:'Depende do objetivo, tempo disponível, rotina e relação com a música. Quem vive de música dedica mais tempo diário; quem canta por hobby adapta o treino à sua realidade. A aula dá uma base inicial — a partir dela, cada um monta seu próprio treinamento.'},
    {icon:'❓', sys:'corpo', h:'Precisa treinar todo dia?', p:'Sim, precisa — quanto mais se treina, mais rápido se alcança o objetivo e mais consistente fica o desenvolvimento. Não treinar todos os dias não é um problema grave, só vai demorar um pouco mais. Cantar é muscular: música precisa de repetição, constância e memória muscular.'},
    {icon:'📋', sys:'corpo', h:'Cronograma básico (60 minutos)', p:'1) Relaxamento (3min) 2) Respiração (3min) 3) Treino articulatório (2min) 4) Abaixamento de laringe (exercícios específicos) 5) Aquecimento vocal fisiológico (10min: vibração de lábios/língua, fricativos, tubos) 6) Percepção e afinação/solfejo (5min) 7) Ajustes vocais/sub-registros (15min) 8) Repertório (15min) 9) Desaquecimento vocal (5min).'},
    {icon:'🔧', sys:'corpo', h:'Adaptação do cronograma', p:'É apenas uma ideia — pode aumentar ou diminuir o tempo. Se só consegue 20-30 minutos, já faz diferença; se uma hora parecer muito no começo, diminua e vá aumentando aos poucos. Cansaço inicial costuma ser só a musculatura ainda não acostumada.'},
    {icon:'🚨', sys:'corpo', h:'Atenção à saúde vocal', p:'Ao perceber qualquer alteração na voz, cansaço excessivo, dor ou rouquidão persistente: procure um médico otorrinolaringologista ou fonoaudiólogo — não deixe para depois. Cuidar da voz é cuidar do seu instrumento.'}
  ],
  callout:'"Cantar é muscular. A voz depende de músculos, e músculos precisam de <strong>repetição, constância e memória muscular</strong>."',
  mcqs:[
    {q:'Segundo o material, é necessário treinar todos os dias?', opts:['Não, treinar 1x por semana é suficiente','Sim — quanto mais treina, mais rápido e consistente é o desenvolvimento','Só é necessário para profissionais','Treinar todo dia atrapalha a evolução'], correct:1},
    {q:'Qual é o tempo total sugerido no cronograma básico apresentado?', opts:['15 minutos','30 minutos','60 minutos (1 hora)','3 horas'], correct:2}
  ],
  openqs:['Por que o material afirma que "organização do tempo de estudo é algo individual"?']
},
{
  id:'mixedvoice_cvt', title:'Mixed Voice na Literatura Internacional (CVT)',
  cards:[
    {icon:'🌐', sys:'lar', h:'CVT — Complete Vocal Technique', p:'Método dinamarquês (Cathrine Sadolin) amplamente usado internacionally, que descreve 4 "modos vocais": Neutral, Curbing, Overdrive e Edge — cada um com ajuste muscular e sonoro próprio.'},
    {icon:'🔄', sys:'lar', h:'Correspondência com o que você já estudou', p:'Neutral ≈ Speaking/Top Voice (leve, CT); Curbing ≈ transição controlada; Overdrive ≈ Belting/Cover Belting (denso, TA); Edge ≈ som mais metálico e agressivo (Peer Belting com mais twang).'},
    {icon:'📚', sys:'corpo', h:'Por que conhecer outros vocabulários', p:'Cursos, professores e cantores internacionais usam nomes diferentes para fenômenos semelhantes — reconhecer as pontes entre terminologias facilita conversar com qualquer professor, de qualquer escola.'},
    {icon:'🎯', sys:'corpo', h:'O que realmente importa', p:'Independente do nome (M1/M2, peito/cabeça, Neutral/Overdrive), o que importa é a sensação corporal, o resultado acústico e a ausência de esforço — a terminologia é só um mapa, não o território.'}
  ],
  callout:'"Mixed voice" não é um sub-registro único — é o <strong>resultado de vários modos</strong> bem combinados.',
  mcqs:[
    {q:'No CVT, qual modo mais se aproxima do que este curso chama de "Belting/Cover Belting"?', opts:['Neutral','Overdrive','Curbing apenas','Nenhum se relaciona'], correct:1},
    {q:'Qual é a principal utilidade de conhecer outra terminologia (como o CVT)?', opts:['Substituir tudo que já foi aprendido','Reconhecer pontes entre vocabulários e dialogar com outras escolas','Não tem utilidade prática','Aprender um novo instrumento'], correct:1}
  ],
  openqs:['Escolha um sub-registro do Módulo 6 e explique a que modo do CVT ele mais se aproxima.']
},
{
  id:'prevencao_lesao', title:'Prevenção de Lesões em Cantores Profissionais',
  cards:[
    {icon:'📊', sys:'corpo', h:'Risco cumulativo', p:'Lesões vocais raramente vêm de um único evento — resultam do acúmulo de uso incorreto, falta de descanso, refluxo não tratado e ignorar sinais de alerta ao longo do tempo (fonte: pesquisas sobre fonotrauma em cantores).'},
    {icon:'🚨', sys:'lar', h:'Sinais de alerta precoce', p:'Mudança de timbre no meio de uma turnê, perda gradual de agudos, necessidade crescente de "aquecer mais" para o mesmo resultado — esses sinais pedem atenção antes de virarem lesão instalada.'},
    {icon:'🛡️', sys:'corpo', h:'Rotina de proteção em turnê/estúdio', p:'Priorizar sono, hidratação constante, aquecimento e desaquecimento sem pular etapas, evitar conversas em ambientes ruidosos entre shows, e usar monitor (in-ear/MindVox) para não competir com o volume da banda.'},
    {icon:'🩺', sys:'lar', h:'Quando parar e buscar avaliação', p:'Rouquidão que não melhora em 2-3 semanas, dor persistente ou perda real de repertório são critérios objetivos (não "vou aguentar mais um show") para procurar um otorrinolaringologista/fonoaudiólogo antes de continuar.'}
  ],
  callout:'"Aguentar mais um show" é exatamente o padrão que <strong>gera as lesões mais graves</strong> em cantores profissionais.',
  mcqs:[
    {q:'Segundo esta aula, como normalmente se desenvolve uma lesão vocal em cantores?', opts:['Sempre de um único evento isolado','Por acúmulo de fatores de risco ao longo do tempo','Só por causas genéticas','Não tem relação com hábito de uso'], correct:1},
    {q:'Qual é um critério objetivo para buscar avaliação profissional?', opts:['Sentir-se levemente cansado uma vez','Rouquidão persistente por 2-3 semanas ou perda real de repertório','Cantar mais de 3 músicas seguidas','Não gostar do próprio timbre'], correct:1}
  ],
  openqs:['Por que "aguentar mais um show" é considerado um risco, e não uma prova de profissionalismo?']
}
] },
  ]
};
