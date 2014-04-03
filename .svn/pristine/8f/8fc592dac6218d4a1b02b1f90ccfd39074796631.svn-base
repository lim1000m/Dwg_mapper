package kr.mp.dwg.domain.mapper;

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
    "objectListInfo",
    "objectInfo"
})
@XmlRootElement(name = "Response")
public class Response {

    @XmlElement(name = "ObjectListInfo")
    protected Response.ObjectListInfo objectListInfo;
    @XmlElement(name = "ObjectInfo")
    protected List<Response.ObjectInfo> objectInfo;
    @XmlAttribute(name = "Code")
    @XmlSchemaType(name = "anySimpleType")
    protected String code;

    public Response.ObjectListInfo getObjectListInfo() {
        return objectListInfo;
    }

    public void setObjectListInfo(Response.ObjectListInfo value) {
        this.objectListInfo = value;
    }

    public List<Response.ObjectInfo> getObjectInfo() {
        if (objectInfo == null) {
            objectInfo = new ArrayList<Response.ObjectInfo>();
        }
        return this.objectInfo;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String value) {
        this.code = value;
    }

    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "objectID",
        "objectNm",
        "coordX",
        "coordY",
        "objectType",
        "dwgList"
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
        @XmlElement(name = "DwgList", required = true)
        protected Response.ObjectInfo.DwgList dwgList;

        
        
        public Object getObjectNm() {
			return objectNm;
		}

		public void setObjectNm(Object objectNm) {
			this.objectNm = objectNm;
		}

		public Object getObjectID() {
            return objectID;
        }

        public void setObjectID(Object value) {
            this.objectID = value;
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

        public Response.ObjectInfo.DwgList getDwgList() {
            return dwgList;
        }

        public void setDwgList(Response.ObjectInfo.DwgList value) {
            this.dwgList = value;
        }


        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "dwgListInfo",
            "dwg"
        })
        public static class DwgList {

            @XmlElement(name = "DwgListInfo")
            protected Response.ObjectInfo.DwgList.DwgListInfo dwgListInfo;
            @XmlElement(name = "Dwg")
            protected List<Response.ObjectInfo.DwgList.Dwg> dwg;

            public Response.ObjectInfo.DwgList.DwgListInfo getDwgListInfo() {
                return dwgListInfo;
            }

            public void setDwgListInfo(Response.ObjectInfo.DwgList.DwgListInfo value) {
                this.dwgListInfo = value;
            }

            public List<Response.ObjectInfo.DwgList.Dwg> getDwg() {
                if (dwg == null) {
                    dwg = new ArrayList<Response.ObjectInfo.DwgList.Dwg>();
                }
                return this.dwg;
            }


            @XmlAccessorType(XmlAccessType.FIELD)
            @XmlType(name = "", propOrder = {
                "dwgID",
                "dwgName",
                "dwgViewURL"
            })
            public static class Dwg {

                @XmlElement(name = "DwgID", required = true)
                protected Object dwgID;
                @XmlElement(name = "DwgName", required = true)
                protected Object dwgName;
                @XmlElement(name = "DwgViewURL", required = true)
                protected Object dwgViewURL;

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

    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "page",
        "total",
        "records"
    })
    public static class ObjectListInfo {

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
