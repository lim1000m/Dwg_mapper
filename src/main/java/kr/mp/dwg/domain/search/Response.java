//
// 이 파일은 JAXB(JavaTM Architecture for XML Binding) 참조 구현 2.2.7 버전을 통해 생성되었습니다. 
// <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a>를 참조하십시오. 
// 이 파일을 수정하면 소스 스키마를 재컴파일할 때 수정 사항이 손실됩니다. 
// 생성 날짜: 2013.12.02 시간 05:01:04 PM KST 
//


package kr.mp.dwg.domain.search;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "dwgList"
})
@XmlRootElement(name = "Response")
public class Response {

    @XmlElement(name = "DwgList", required = true)
    protected Response.DwgList dwgList;
    @XmlAttribute(name = "Code")
    @XmlSchemaType(name = "anySimpleType")
    protected String code;

    public Response.DwgList getDwgList() {
        return dwgList;
    }

    public void setDwgList(Response.DwgList value) {
        this.dwgList = value;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String value) {
        this.code = value;
    }


    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "dwgListInfo",
        "dwg"
    })
    public static class DwgList {

        @XmlElement(name = "DwgListInfo")
        protected Response.DwgList.DwgListInfo dwgListInfo;
        @XmlElement(name = "Dwg")
        protected List<Response.DwgList.Dwg> dwg;

        public Response.DwgList.DwgListInfo getDwgListInfo() {
            return dwgListInfo;
        }

        public void setDwgListInfo(Response.DwgList.DwgListInfo value) {
            this.dwgListInfo = value;
        }

        public List<Response.DwgList.Dwg> getDwg() {
            if (dwg == null) {
                dwg = new ArrayList<Response.DwgList.Dwg>();
            }
            return this.dwg;
        }


        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "dwgID",
            "dwgName",
            "dwgViewURL",
            "objectInfo"
        })
        public static class Dwg {

            @XmlElement(name = "DwgID", required = true)
            protected Object dwgID;
            @XmlElement(name = "DwgName", required = true)
            protected Object dwgName;
            @XmlElement(name = "DwgViewURL", required = true)
            protected Object dwgViewURL;
            @XmlElement(name = "ObjectInfo")
            protected Response.DwgList.Dwg.ObjectInfo objectInfo;

            public Object getDwgID() {
                return dwgID;
            }

            public void setDwgID(Object value) {
                this.dwgID = value;
            }

            public Object getDwgName() {
                return dwgName;
            }

            public void setDwgName(Object value) {
                this.dwgName = value;
            }

            public Object getDwgViewURL() {
                return dwgViewURL;
            }

            public void setDwgViewURL(Object value) {
                this.dwgViewURL = value;
            }

            public Response.DwgList.Dwg.ObjectInfo getObjectInfo() {
                return objectInfo;
            }

            public void setObjectInfo(Response.DwgList.Dwg.ObjectInfo value) {
                this.objectInfo = value;
            }


            @XmlAccessorType(XmlAccessType.FIELD)
            @XmlType(name = "", propOrder = {
                "objectID",
                "objectNm",
                "coordX",
                "coordY",
                "objectType"
            })
            public static class ObjectInfo {

                @XmlElement(name = "ObjectID", required = true)
                protected Object objectID;
                @XmlElement(name = "ObjectNm", required = true)
                protected Object objectNm;
                @XmlElement(name = "CoordX", required = true)
                protected Object coordX;
                @XmlElement(name = "CoordY", required = true)
                protected Object coordY;
                @XmlElement(name = "ObjectType", required = true)
                protected Object objectType;

                public Object getObjectID() {
                    return objectID;
                }

                public void setObjectID(Object value) {
                    this.objectID = value;
                }

                
                public Object getObjectNm() {
					return objectNm;
				}

				public void setObjectNm(Object objectNm) {
					this.objectNm = objectNm;
				}

				public Object getCoordX() {
                    return coordX;
                }

                public void setCoordX(Object value) {
                    this.coordX = value;
                }

                public Object getCoordY() {
                    return coordY;
                }

                public void setCoordY(Object value) {
                    this.coordY = value;
                }

                public Object getObjectType() {
                    return objectType;
                }

                public void setObjectType(Object value) {
                    this.objectType = value;
                }

            }

        }

        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "page",
            "total",
            "records"
        })
        public static class DwgListInfo {

            @XmlElement(name = "Page")
            protected int page;
            @XmlElement(name = "Total")
            protected int total;
            @XmlElement(name = "Records")
            protected int records;

            public int getPage() {
                return page;
            }

            public void setPage(int value) {
                this.page = value;
            }

            public int getTotal() {
                return total;
            }

            public void setTotal(int value) {
                this.total = value;
            }

            public int getRecords() {
                return records;
            }

            public void setRecords(int value) {
                this.records = value;
            }

        }

    }

}
