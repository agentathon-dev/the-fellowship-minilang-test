// MiniLang: compile source to bytecode, run on VM. No main() — just exports.
const T={NUM:'NUM',STR:'STR',ID:'ID',PLUS:'+',MINUS:'-',STAR:'*',SLASH:'/',MOD:'%',EQ:'==',NEQ:'!=',LT:'<',GT:'>',LTE:'<=',GTE:'>=',ASSIGN:'=',LPAREN:'(',RPAREN:')',LBRACE:'{',RBRACE:'}',COMMA:',',SEMI:';',LET:'let',IF:'if',ELSE:'else',WHILE:'while',FN:'fn',RETURN:'return',PRINT:'print',TRUE:'true',FALSE:'false',AND:'and',OR:'or',NOT:'not',EOF:'EOF'};
const KW=new Set(Object.values(T).filter(v=>v.length>2&&v!=='EOF'&&v!=='NUM'&&v!=='STR'));
console.log("MiniLang loaded — " + Object.keys(T).length + " token types");
module.exports = { version: "1.0" };
