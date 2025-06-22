import { Building2Icon, Calendar, FileTextIcon, Mail, MapPin, Phone, PiggyBankIcon, Scale, Shield, User } from "lucide-react";
import { Achievement } from "../model/types";
import { Badge } from "@/shared/ui/kit/badge";
import { formatDate } from "@/shared/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import { Separator } from "@/shared/ui/kit/separator";


interface AchievmentPageProps {
    data: Achievement
}

export default function AchievmentPage({ data }: AchievmentPageProps) {
    console.log(data);

    const parsePerformanceData = (data: string) => {
        return data
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item.length > 0)
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <PiggyBankIcon className="h-8 w-8 text-primary" />
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                    <Badge variant="secondary" className="ml-auto">
                        {data.status.name}
                    </Badge>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Дата регистрации: {formatDate(data.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Scale className="h-4 w-4" />
                        <span>Порода: {data.breed.name}</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Description */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileTextIcon className="h-5 w-5" />
                            Описание
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{data.description}</p>
                    </CardContent>
                </Card>

                {/* Performance Data */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Scale className="h-5 w-5" />
                            Показатели продуктивности
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {parsePerformanceData(data.performanceData).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                                >
                                    <span className="text-sm font-medium">{item.split("-")[0]}</span>
                                    <span className="text-sm text-muted-foreground">{item.split("-")[1]}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Developer */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Разработчик
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div>
                            <h4 className="font-semibold">{data.developer.businessEntityBriefName}</h4>
                            <p className="text-sm text-muted-foreground">{data.developer.businessEntityName}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4" />
                                <span>
                                    {data.developer.addressList[0].cityName}, {data.developer.addressList[0].streetName}{" "}
                                    {data.developer.addressList[0].settlementName}
                                    {data.developer.addressList[0].roomNumber}
                                </span>
                            </div>
                            {data.developer.communicationsList.map((comm, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                    {comm.channelCode === "EM" ? <Mail className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                                    <span>{comm.contact}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Legal Information */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Правовая информация
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2">Номер акта</h4>
                            <p className="text-sm text-muted-foreground">{data.actNumber}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Уполномоченный орган</h4>
                            <p className="text-sm text-muted-foreground">{data.authorityName}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Organizations */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Building2Icon className="h-5 w-5" />
                            Организации-участники ({data.organizations.length})
                        </CardTitle>
                        <CardDescription>Организации, участвующие в разведении и содержании породы</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            {data.organizations.map((org) => (
                                <div key={org.id} className="border rounded-lg p-4 space-y-3">
                                    <div>
                                        <h4 className="font-semibold text-sm">{org.businessEntityBriefName}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{org.businessEntityName}</p>
                                    </div>

                                    <Separator />

                                    <div className="space-y-2">
                                        {org.addressList.map((address, addrIndex) => (
                                            <div key={addrIndex} className="flex items-start gap-2 text-xs">
                                                <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">
                                                    {address.regionName}, {address.districtName}
                                                    {address.streetName && `, ${address.streetName}`}
                                                    {address.settlementName && ` ${address.settlementName}`}
                                                    {address.postCode && `, ${address.postCode}`}
                                                </span>
                                            </div>
                                        ))}

                                        {org.communicationsList?.map((comm, commIndex) => (
                                            <div key={commIndex} className="flex items-center gap-2 text-xs">
                                                {comm.channelCode === "EM" ? <Mail className="h-3 w-3" /> : <Phone className="h-3 w-3" />}
                                                <span className="text-muted-foreground">{comm.contact}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}